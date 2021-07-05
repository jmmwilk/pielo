import * as state from '/test/state.js';
import * as productPage from '/test/views/product-page/productpage.js';
import * as general from '/test/general.js';

let database = firebase.database();
let storage = firebase.storage();
let formPageNumber;
let formPageName;
let patternNr;
let formType;

export function goToForm (itemType, diaper, key) {
	document.getElementById('page').innerHTML = '';
	formType = itemType;
	if (formType == 'newItem') {
		state.formType.type = 'new-form';
	} else {
		state.formType.type = 'edit-form';
	};
	resetForm ();
	getAttributes ()
	.then(function(){
		getAttributesText ();
		getAnswersOptions ();
	})
	.then(function(){
		createTemplate ('form-view', 'page');
		if (formType == 'newItem') {
			createDiaperCategoriesPage ();
			document.getElementById('next-button').addEventListener ('click', e => {
				const promise = general.submit ();
				promise.then(function(isValidated){
					if (isValidated) {
						let chosenCategory = $('#diaper-categories-input').val()[0]
						saveChosenCategoryData (chosenCategory)
						createForm ();
					}
				})
			})
		} else {
			saveChosenCategoryData (diaper.diaper['category-data'].name)
			getNewItemData (diaper);
			createForm (key);
		};
	});
}

function resetForm () {
	formPageNumber = 0;
	deleteStateNewItem ();
	state.questionsText.length = 0;
	state.answersOptions.length = 0;
	state.attributes.length = 0;
	state.newItem.answers = {};
	state.newItem.images = [];
	state.newItem.layers = [];
}

export function deleteStateNewItem () {
	delete state.newItem.answers;
	delete state.newItem.categoryData;
	delete state.newItem.images;
	delete state.newItem.sizes;
	delete state.newItem.patterns;
	delete state.newItem.layers;
	delete state.newItem.description;
	delete state.newItem.itemName;
	delete state.newItem.producerName;
}

function getNewItemData (diaper) {
	state.newItem.answers = diaper.diaper.attributes;
	state.newItem.categoryData = diaper.diaper['category-data'];
	state.newItem.images = diaper.diaper.images;
	state.newItem.sizes = diaper.diaper.sizes;
	state.newItem.patterns = diaper.diaper.patterns;
	state.newItem.layers = diaper.diaper.layers;
	state.newItem.description = diaper.diaper.description;
	state.newItem.itemName = diaper.diaper['item-name'];
	state.newItem.producerName = diaper.diaper['producer-name'];

	let layers = diaper.diaper.layers;
	layers.forEach(function(layer){
		let layerId = layer.id
	});
}

function createForm (key) {
	let formPageNames = getformPageNames ()
	formPageName = formPageNames[formPageNumber];
	document.getElementById('form-view-wrapper').innerHTML = '';
	createTemplate ('form', 'form-view-wrapper');
	createFormPage (key);
	setProgress ();
	fillInputsWithSavedAnswers ();
}

function setProgress () {
	let progressNumber = (formPageNumber + 1) *10;
	let bar = document.getElementById('progress-bar');
	bar.setAttribute("aria-valuenow", progressNumber);
	bar.style.width = progressNumber + '%';
}

function shouldISkipPerCompPage () {
	let selectedLayers = [];
	state.newItem.layers.forEach(function(layer){
		if (layer['fabrics-names'].length > 1) {
			selectedLayers.push(layer)
		};
	});
	if (selectedLayers.length == 0) {
		return true
	} else {
		return false
	}
}

function activateNextButton (key) {
	saveAnswers ();
	let formPageNames = getformPageNames ()
	formPageNumber = formPageNumber + 1
	formPageName = formPageNames[formPageNumber];
	if (formPageName == 'percentage-composition') {
		if (shouldISkipPerCompPage () == true) {
			formPageNumber = formPageNumber + 1
		}
	}
	formPageName = formPageNames[formPageNumber];
	if (formPageName == undefined) {
		let dbKey = addMockDiaper (key);
		let page = document.getElementById('page');
		page.innerHTML = '';
		window.location.href='#product-page';
		general.updateHistory('#product-page');
		productPage.createProductScreen (dbKey, 'preview');
		return
	};
	document.getElementById('form-wrapper').innerHTML = '';
	let clickedButton = 'next';
	createFormPage (key, clickedButton);
	fillInputsWithSavedAnswers ();
	setProgress ();
}

function activateBackButton (key) {
	saveAnswers ();
	let formPageNames = getformPageNames ()
	formPageNumber = formPageNumber - 1;
	formPageName = formPageNames[formPageNumber];
	if (formPageName == 'percentage-composition') {
		if (shouldISkipPerCompPage () == true) {
			formPageNumber = formPageNumber - 1
		}
	}
	formPageName = formPageNames[formPageNumber];
	document.getElementById('form-wrapper').innerHTML = '';
	let clickedButton = 'back';
	createFormPage (key, clickedButton);
	setProgress ();
	fillInputsWithSavedAnswers ();
}

function fillInputsWithSavedAnswers () {
	if (formPageName == 'main-info') {
		$('#' + 'item-name-input').val(state.newItem.itemName);
		$('#' + 'producer-name-input').val(state.newItem.producerName);
		return
	};
	if (formPageName == 'fabrics') {
		fillFabrics ();
		return
	};
	if (formPageName == 'percentage-composition') {
		fillPercentageComposition ();
		return
	};
	if (formPageName == 'sizes') {
		fillSizes ();
		return
	};
	if (formPageName == 'dimensions') {
		fillDimensions ();
		fillWeights ();
		return
	};
	if (formPageName == 'images') {
		createAndFillPatterns ();
		fillPatternNames ()
		return
	};
	if (formPageName == 'description') {
		$('#' + 'description-input').val(state.newItem.description);
		return
	};
	let checkboxes = document.getElementsByClassName('form-input checkbox');
	Array.from(checkboxes).forEach(function(checkbox){
		checkbox.checked = state.newItem.answers[checkbox.id];
		if (checkbox.checked == true) {
			checkbox.setAttribute("aria-expanded", true);
			let dependentQuestion = Array.from(state.attributes).find(function(attribute){
				return attribute['parent-id'] == checkbox.id
			});
			if (dependentQuestion == undefined) {
				return
			};
			let categoryAttributes = state.newItem.categoryData.attributes
			let isThisFormPageName = isThisFormPage (state.attributes, dependentQuestion.id);
			if (isThisFormPageName == false) {
				return
			}
			let boxId = dependentQuestion.id + '-box';
			document.getElementById(boxId).classList.add('show');
		};
	});
	let selects = $('.form-input .select');
	Array.from(selects).forEach(function(select){
		let attributeValue = state.newItem.answers[select.id]
		$('#' + select.id).selectpicker('val', attributeValue);
	});
	if (formPageName == 'others') {
		$('#release-date-input').val(state.newItem.answers['release-date']);
		$('#date').datepicker('update', state.newItem.answers['release-date']);
	}
}

function fillFabrics () {
	let selects = $('.form-input .select');
	Array.from(selects).forEach(function(select){
		let layer = state.newItem.layers.find(function(layer){
			return layer.id == select.id
		});
		if (!layer) {
			return
		};
		let fabrics = layer['fabrics-names'];
		$('#' + select.id).selectpicker('val', fabrics);
	});
}

function fillDimensions () {
	let sizes = state.newItem.sizes;
	let inputs = document.getElementsByClassName('dimension-input');
	Array.from(inputs).forEach(function(input){
		let dimensionId = $(input).attr('dimension-id');
		let sizeDimensions = sizes.find(function(size){
			return size.id == $(input).attr('size')
		}).dimensions;
		if (!sizeDimensions) {
			return
		}
		let value = sizeDimensions.find(function(sizeDimension){
			return dimensionId == sizeDimension.id
		}).value;
		$(input).val(value);
	});
}

function fillWeights () {
	let inputsFrom = $('.weight-input-from');
	Array.from(inputsFrom).forEach(function(input){
		let chosenSize = state.newItem.sizes.find(function(size){
			return size.id == $(input).attr('size')
		})
		let value = chosenSize.min
		$(input).val(value);
	})
	let inputsTill = $('.weight-input-till');
	Array.from(inputsTill).forEach(function(input){
		let value = state.newItem.sizes.find(function(size){
			return size.id == $(input).attr('size')
		}).max;
		$(input).val(value);
	});
}

function fillPercentageComposition () {
	if (!state.newItem.layers) {
		return
	}
	let inputs = $('.form-control');
	Array.from(inputs).forEach(function(input){
		let layerId = $(input).attr('layer-id');
		let fabricName = $(input).attr('name');
		let layer = state.newItem.layers.find(function(lr){
			return lr['id'] == layerId
		});
		if (!layer.fabrics) {
			return
		};
		let fabric = layer.fabrics.find(function(fabric){
			return fabric.name == fabricName
		});
		if (!fabric) {
			return
		};
		let value = fabric.percentage;
		if (value == 100) {
			delete fabric.percentage
		} else {
			$(input).val(value);
		};
	})
}

function fillSizes () {
	if (!state.newItem.sizes) {
		return
	}
	let value = state.newItem.sizes.map(function(size){
		return size.name
	})
	$('#sizes-input').selectpicker('val', value);
}

function createAndFillPatterns () {
	if (state.newItem.images.length > 0) {
		let patternsNumber = 0;
		state.newItem.images.forEach(function(image){
			if (image['pattern-nr'] > patternsNumber) {
				patternsNumber = parseInt(image['pattern-nr'], 10);
			};
		});

		for (let i=2; i<patternsNumber + 1; i++) {
			addPattern (i)
		};
		patternNr = patternsNumber + 1;

		let imageBoxes = $('.preview-image-box');
		state.newItem.images.forEach(function(image){
			let img = document.createElement('img');
			let box = Array.from(imageBoxes).find(function(imageBox){
				return $(imageBox).attr('pattern-nr') == parseInt(image['pattern-nr'], 10) 
				&& $(imageBox).attr('image-nr') == parseInt(image['image-nr'], 10)
				&& $(imageBox).attr('size-id') == image['size-id']
			});
			img.className = 'small-image mx-auto img-fluid img-thumbnail m-1';
			img.src = image.url;
			box.appendChild(img);
			if (parseInt(image['image-nr'], 10) == 1) {
				removeAttrRequiredFromInput (parseInt(image['pattern-nr'], 10), 1, image['size-id']);
			}
		});
	};
}

function fillPatternNames () {
	if (!state.newItem.patterns) {
		return
	}
	let patterns = Array.from(state.newItem.patterns);
	let inputs = $('.pattern-name');
	for (let i=0; i<patterns.length; i++) {
		let patternNameInput = Array.from(inputs).find(function(input){
			return i + 1 == $(input).attr('pattern-number');
		});
		$(patternNameInput).val(patterns[i].name);
	}
}

export function addMockDiaper (key, itemType) {
	if (itemType) {
		formType = itemType;
	}
	let newDbRef;
	if (formType == 'newItem' && state.whereToAddNewItem.addTo == 'mock-diapers-preview') {
		let dbRef = firebase.database().ref('mock-diapers-preview/');
		newDbRef = dbRef.push();
	};
	if (formType == 'newItem' && state.whereToAddNewItem.addTo == 'mock-diapers') {
		let dbRef = firebase.database().ref('mock-diapers/');
		newDbRef = dbRef.push();
	};
	if (formType == 'editItem' && state.whereToAddNewItem.addTo == 'mock-diapers') {
		newDbRef = firebase.database().ref('mock-diapers/' + key);
	};
	if (formType == 'editItem' && state.whereToAddNewItem.addTo == 'mock-diapers-preview') {
		newDbRef = firebase.database().ref('mock-diapers-preview/' + key);
		state.whereToAddNewItem.addTo = 'mock-diapers'
	};
	let diaper = state.newItem;
	newDbRef.set({
	  	'attributes': diaper.answers,
//	  'category-data': diaper.categoryData,
		'diaper-category-name': diaper.categoryData.name,
		'diaper-category-id': diaper.categoryData.id,
	  	'images': diaper.images,
	  	'sizes': diaper.sizes,
	  	'patterns': diaper.patterns,
	  	'layers': diaper.layers,
	  	'description': diaper.description,
	  	'item-name': diaper.itemName,
	 	'producer-name': diaper.producerName,
	 	'producer-key': state.state.userKey,
	});
	let newItemKey = newDbRef.getKey();
	if (formType == 'newItem') {
		return newItemKey
	} else {
		return key
	};
}

function createFormPage (key, clickedButton) {
	let formPage = formPages.find(function(fPage){
		return fPage.id == formPageName
	});
	createTemplate ('form-page', 'form-wrapper', {'formPage': formPage});
	createTemplate ('form-page-title', formPageName, {'title': formPage.name})
	changeNextButton ();
	if (formPageName == formPages[0].id) {
		$('#back-button').addClass('d-none');
	} else {
		$('#back-button').removeClass('d-none');
	}
	if (formPageName == 'main-info') {
		createMainInfoPage ();
	}
	if (formPageName == 'images') {
		createImagesPage ();
	}
	if (formPageName == 'sizes') {
		createSizesPage ();
	}
	if (formPageName == 'dimensions') {
		getDimensions ();
		createDimensionsPage ();
	}
	if (formPageName == 'percentage-composition') {
		createPercentageCompositionPage (clickedButton, key);
	}
	if (formPageName == 'others' || formPageName == 'structure' || formPageName == 'description' || formPageName == 'fabrics') {
		createFormQuestions ();
		if (formPageName == 'others') {
			let questionText = getQuestionText('release-date');
			createTemplate ('date-input', 'others', {'text': questionText.text})
			$('#date').datepicker({
				format: "mm/yyyy",
			    minViewMode: 1,
			    maxViewMode: 2,
			    language: "pl"
			});
		};
	}
	document.getElementById('next-button').addEventListener ('click', e => {
		// if (formPageName == 'images') {
		// 	if (checkIfFilled ()) {
		// 		const promise = general.submit ();
		// 		promise.then(function(isValidated){
		// 			if (isValidated) {
		// 				activateNextButton (key)
		// 			}
		// 		})
		// 	}
		// 	return
		// }
		const promise = general.submit ();
		promise.then(function(isValidated){
			if (isValidated) {
				activateNextButton (key)
			}
		})
	})
	document.getElementById('back-button').addEventListener ('click', e => {
		activateBackButton (key);
	})
}

function checkIfFilled () {

}

function changeNextButton () {
	if (formPageName == 'description') {
		$('#next-button').text('Zobacz podgląd');
		$('#next-button').addClass('btn-warning');
		$('#next-button').removeClass('btn-primary');
		
	};
	if (formPageNumber == formPages.length - 2) {
		$('#next-button').text('Dalej');
		$('#next-button').addClass('btn-primary');
		$('#next-button').removeClass('btn-warning');
	};
}

function createMainInfoPage () {
	createTextInput ('item-name', 1, 'Nazwa Pieluszki', true);
	createTextInput ('producer-name', 1, 'Nazwa Producenta', true);
}

function createImagesPage () {
	patternNr = 1;
	createTemplate ('add-pattern-button', formPageName);
	addPattern (patternNr);
	patternNr = patternNr + 1;
	enableRemoveImage ();
	document.getElementById('add-pattern-button').onclick = function () {
		addPattern (patternNr);
		patternNr = patternNr + 1;
		enableRemoveImage ();
	}
}

function enableRemoveImage () {
	let deleteImageButtons = $('.remove-image-button');
	Array.from(deleteImageButtons).forEach(function(button){
		$(button).click(function(){
			let btnPatternNumber = button.getAttribute('pattern-nr');
			let btnImageNr = button.getAttribute('image-nr');
			let btnSizeNr = button.getAttribute('size-id');

			let inputs = $('.image-input');
			let imageInput = Array.from(inputs).find(function(input){
				return (input.getAttribute('pattern-number') == btnPatternNumber
				&& input.getAttribute('image-number') == btnImageNr
				&& input.getAttribute('size-id') == btnSizeNr)
			})
			deletePreviousImage (btnPatternNumber, btnImageNr, btnSizeNr, imageInput);
			imageInput.value = '';

			let previewImageBoxes = $('.preview-image-box');
			let previewImageBox = Array.from(previewImageBoxes).find(function(box){
				return (box.getAttribute('pattern-nr') == btnPatternNumber
				&& box.getAttribute('image-nr') == btnImageNr
				&& box.getAttribute('size-id') == btnSizeNr)
			});
			$(previewImageBox).empty();

			let image1 = state.newItem.images.find(function(img){
				return (img['pattern-nr'] == btnPatternNumber && img['image-nr'] == 1 && img['size-id'] == btnSizeNr)
			})
			let image2 = state.newItem.images.find(function(img){
				return (img['pattern-nr'] == btnPatternNumber && img['image-nr'] == 2 && img['size-id'] == btnSizeNr)
			})
			let image3 = state.newItem.images.find(function(img){
				return (img['pattern-nr'] == btnPatternNumber && img['image-nr'] == 3 && img['size-id'] == btnSizeNr)
			})
			let image4 = state.newItem.images.find(function(img){
				return (img['pattern-nr'] == btnPatternNumber && img['image-nr'] == 4 && img['size-id'] == btnSizeNr)
			})

			if (btnImageNr == 4) {
				removeAttrRequiredFromInput (btnPatternNumber, 3, btnSizeNr);
			};
			if (btnImageNr == 3) {
				if (!image4) {
					removeAttrRequiredFromInput (btnPatternNumber, 3, btnSizeNr);
					removeAttrRequiredFromInput (btnPatternNumber, 2, btnSizeNr);
				}
				if (image4) {
					setAttrRequiredToInput (btnPatternNumber, 3, btnSizeNr);
				}
			};
			if (btnImageNr == 2) {
				if (!image3 && !image4) {
					removeAttrRequiredFromInput (btnPatternNumber, 2, btnSizeNr);
				} else {
					setAttrRequiredToInput (btnPatternNumber, 2, btnSizeNr);
				}
			};
			if (btnImageNr == 1) {
				if (!image2 && !image3 && !image4) {
					setAttrRequiredToInput (btnPatternNumber, 1, btnSizeNr);
				} else {
					setAttrRequiredToInput (btnPatternNumber, 1, btnSizeNr);
				}
			}
		})
	})
}

function removeAttrRequiredFromInput (patternNumberValue, imageNumberValue, sizeIdValue) {
	let input = document.getElementById ('pattern-' + patternNumberValue + '-size-' + sizeIdValue + '-image-' + imageNumberValue);
	input.removeAttribute('required');
}

function deletePreviousImage (patternNumberValue, imageNumberValue, sizeIdValue, input) {
	deleteImageFromState (patternNumberValue, imageNumberValue, sizeIdValue);
	let key = input.getAttribute('image-key');
	if (!key) {
		return
	}
	deleteImageFromStorage (key);
	$(input).removeAttr('key');
}

function deleteImageFromState (patternNumberValue, imageNumberValue, sizeIdValue) {
	let images = state.newItem.images;
	for (let i=0; i<images.length; i++) {
		if (images[i]['pattern-nr'] == patternNumberValue 
			&& images[i]['image-nr'] == imageNumberValue 
			&& images[i]['size-id'] == sizeIdValue) {
			images.splice(i, 1);
		};
	};
}
function deleteImageFromStorage (key) {
	let name = 'diapers/' + key;
	storage.ref().child(name).delete().then(() => {
	}).catch((error) => {
		console.log ('error')
	});
}
 
function addPattern (patternNumber) {
	let sizes = state.newItem.sizes;
	if (!sizes) {
		return
	}
	createTemplate ('add-pattern', formPageName, {'pattern-number': patternNumber});
	sizes.forEach(function(size){
		let imagesData = setImageData (patternNumber, size);
		let wrapperId = 'pattern-' + patternNumber + '-images-wrapper';
		createTemplate ('images-size-box', wrapperId, imagesData);
	});
	enableRemovePattern (patternNumber);
	loadImage (patternNumber);
}

function enableRemovePattern (patternNumber) {
	let buttonId = 'remove-pattern-nr-' + patternNumber;
	let removeButton = document.getElementById(buttonId);
	let length = state.newItem.images.length;
	removeButton.onclick = function() {
		
		let inputs = Array.from($('.image-input')).filter(function(input){
			return (input.getAttribute('pattern-number') == patternNumber)
		});
		inputs.forEach(function(input){
			let key = input.getAttribute('image-key')
			if (!key) {
				return
			} ;
			deleteImageFromStorage (key);
		});
		let filteredImages = state.newItem.images.filter(function(image){
			return (parseInt(image['pattern-nr'], 10) !== patternNumber)
		});
		filteredImages.forEach(function(image){
			let imgPatternNr = parseInt(image['pattern-nr'], 10) 
			if (imgPatternNr > patternNumber) {
				image['pattern-nr'] = imgPatternNr - 1;
			};
		});
		state.newItem.images = filteredImages;
		savePatternNames ();
		if (state.newItem.patterns) {
			let filteredPatterns = state.newItem.patterns.filter(function(pattern){
				return (parseInt(pattern['pattern-nr'], 10) !== patternNumber)
			});
			filteredPatterns.forEach(function(pattern){
				let pttrnNr = parseInt(pattern['pattern-nr'], 10) 
				if (pttrnNr > patternNumber) {
					pattern['pattern-nr'] = pttrnNr - 1;
				};
			});
			state.newItem.patterns = filteredPatterns;
		};
		for (let i=1; i<patternNr; i++) {
			removePatternWrapper (i);
		};
		patternNr = 1;
		addPattern (patternNr);
		patternNr = patternNr + 1;
		document.getElementById('add-pattern-button').onclick = function () {
			addPattern (patternNr);
			patternNr = patternNr + 1;
		};
		fillInputsWithSavedAnswers ();
	}
}

function removePatternWrapper (patternNumber) {
	let patternWrapperId = 'pattern-wrapper-nr-' + patternNumber;
	let patternWrapper = document.getElementById(patternWrapperId);
	patternWrapper.parentElement.removeChild(patternWrapper);
}

function loadImage (patternNumber) {
	Array.from($('.pattern-' + patternNumber)).forEach(function(input){
		$('#' + input.id).change(function(event) {
			if (event.target.files.length > 0) {
				createImagePreview (event, input);
				addImage (input);
			}
		});
	})
}

function setAttrRequiredToInput (patternNumberValue, imageNumberValue, sizeIdValue) {
	let input = document.getElementById ('pattern-' + patternNumberValue + '-size-' + sizeIdValue + '-image-' + imageNumberValue);
	input.setAttribute('required', 'required')
}

function setImageData (patternNumber, size) {
	let imageNumbers = {
		'pattern-number': patternNumber,
		'size-name': size.name,
		'size-id': size.id,
		'image-numbers': [
			{
				'image-number': 1, 
				'profile-image': true,
			},
			{
				'image-number': 2,
			},
			{
				'image-number': 3,
			},
			{
				'image-number': 4,
			},
		]
	};
	return imageNumbers
}

function createImagePreview (event, input) {
	let image = document.createElement('img');
	let box = document.getElementById('file-preview-' + input.id);
	box.innerHTML = '';
	image.className = 'small-image mx-auto img-fluid img-thumbnail m-1';
	image.src = URL.createObjectURL(event.target.files[0]);
	box.appendChild(image);
}

function addImage (input) {
	let patternNumberValue = input.getAttribute('pattern-number');
	let imageNumberValue = input.getAttribute('image-number');
	let sizeIdValue = input.getAttribute('size-id');
	deletePreviousImage (patternNumberValue, imageNumberValue, sizeIdValue, input);
	const selectedFile = document.getElementById(input.id).files[0];
	let dbRef = firebase.database().ref('images/');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  'image': 'small'
	});
	let key = newDbRef.getKey(); 
	let imageRef = storage.ref().child('diapers/' + key);
	imageRef.put(selectedFile)
	.then(function(snapshot) {
	  	return imageRef.getDownloadURL();
	})
	.then(function(downloadURL) {
		saveImageToState (patternNumberValue, imageNumberValue, sizeIdValue, downloadURL, key, input);
	})
	.then(function() {
		let image2 = state.newItem.images.find(function(img){
			return (img['pattern-nr'] == patternNumberValue && img['image-nr'] == 2 && img['size-id'] == sizeIdValue)
		})
		let image3 = state.newItem.images.find(function(img){
			return (img['pattern-nr'] == patternNumberValue && img['image-nr'] == 3 && img['size-id'] == sizeIdValue)
		})
		if (imageNumberValue == 4) {
			if (!image2) {
				setAttrRequiredToInput (patternNumberValue, 2, sizeIdValue);
			}
			if (!image3) {
				setAttrRequiredToInput (patternNumberValue, 3, sizeIdValue);
			}
		};
		if (imageNumberValue == 3) {
			if (!image2) {
				setAttrRequiredToInput (patternNumberValue, 2, sizeIdValue);
			}
		};
	})
}

function saveImageToState (patternNumberValue, imageNumberValue, sizeIdValue, downloadURL, key, input) {
	let image = {}
	image['pattern-nr'] = patternNumberValue;
	image['image-nr'] = imageNumberValue;
	image['size-id'] = sizeIdValue;
	image.url = downloadURL;
	image.key = key;
	$(input).attr('image-key', key)
	state.newItem.images.push(image);
}

function createFormQuestions () {
	let diaper = state.newItem.categoryData.attributes;
	const filteredAttributes = state.attributes.filter(function(attribute) {
		let attributeId = attribute.id;
		return !(!diaper[attributeId] || attribute['form-page-name'] !== formPageName);
	})
	filteredAttributes.forEach(function(attribute){
		let attributeId = attribute.id;
		if (attribute['question-type'] !== 'dependent'){
			if (attribute['input-type'] == 'checkbox') {
				if (diaper[attributeId].answer == 'ask') {
					createCheckboxInput (attributeId);
					if (attribute['dependent-questions']) {
						createDependentQuestions (attribute, filteredAttributes)
					};
				};
				if (diaper[attributeId].answer == true) {
					if (attribute['dependent-questions']) {
						createDependentQuestions (attribute, filteredAttributes)
					};
				};
			};
			if (attribute['input-type'] == 'select') {
				createSelectInput (attributeId);
			};
			if (attribute['input-type'] == 'text-input') {
				createTextInput (attributeId, 15, 'Opis pieluszki', false);
			};
		};
		let parentId = attribute['parent-id'];
		if (attribute['question-type'] == 'dependent'
			&& state.newItem.answers[parentId] == true) {
			let parentFormPageName = state.attributes.find(function(att){
				return att.id == parentId
			})['form-page-name']
			if (parentFormPageName !== formPageName) {
				createSelectInput (attributeId);
			};
		};
	});
}

function createDependentQuestions (attribute, attributes) {
	let diaper = state.newItem.categoryData.attributes
	Array.from(attribute['dependent-questions']).forEach(function(depAttribute){
		let depAttributeId = depAttribute.id
		let isThisFormPageName = isThisFormPage (state.attributes, depAttributeId);
		if (isThisFormPageName == false) {
			return
		}
		let attributeId = attribute.id;
		createSelectInput (depAttributeId);
		let depAttributeData = findDependentAttributeData (state.attributes, depAttributeId);
		if (diaper[depAttributeId].answer == 'ask'
			&& depAttributeData['input-type'] == 'select'
			&& diaper[attributeId].answer !== true) {
			general.collapseElement (depAttributeId + '-box', attributeId);
		}
		document.getElementById(depAttributeId + '-box').classList.add('mb-3')
	})
}

function isThisFormPage (attributes, depAttributeId) {
	let isThisFormPage;
	Array.from(attributes).forEach(function(attribute){
		if (attribute.id == depAttributeId) {
			if (attribute['form-page-name'] !== formPageName)
			isThisFormPage = false
			return
		}
	})
	return isThisFormPage
}

function findDependentAttributeData (attributes, depAttributeId) {
	let dependentAttribute;
	Array.from(attributes).forEach(function(attribute){
		if (attribute.id == depAttributeId) {
			dependentAttribute = attribute
			return
		}
	})
	return dependentAttribute
}

function createCheckboxInput (attributeId) {
	let questionData = getQuestionText (attributeId)
	createTemplate ('checkbox-input', formPageName, questionData);
}

function createTextInput (attributeId, rowsNr, title, required) {
	let inputData = {
		'id': attributeId,
		'rows-nr': rowsNr,
		'title': title,
		'required': required,
	}
	createTemplate ('text-input', formPageName, {'input-data': inputData});
}

function isFabricAttr (attributeId) {
	if (attributeId.substr(attributeId.length - 8) == '-fabrics') {
		return 'fabrics'
	} else {
		return false
	}
}

function createSelectInput (attributeId) {
	let questionData = getQuestionText (attributeId);
	questionData.fabrics = isFabricAttr (attributeId);
	createTemplate ('select-input', formPageName, questionData);
	let answersData = {};
	let answers = state.answersOptions;
	let diaper = state.newItem.categoryData.attributes;
	Array.from(answers).forEach(function(answer) {
		if (attributeId == 'certificates') {
		}
		if (answer.id == diaper[attributeId]['answer-options-id']) {
			answersData.data = answer.options
		}
	})
	createTemplate ('new-input', attributeId, answersData);
	$('#' + attributeId).selectpicker();
}

function getQuestionText (attributeId) {
	let questionData = {};
	let diaper = state.newItem.categoryData.attributes;
	let questions = state.questionsText
	Array.from(questions).forEach(function(question){
		if (question['attribute-id'] == attributeId) {
			const textGroups = Object.values(question['text-groups']);
			Array.from(textGroups).forEach(function(group){
				if (group.id == diaper[attributeId]['question-text-group-id']) {
					questionData['text'] = group.text
					questionData['question-id'] = attributeId;
					return
				}
			})
		}
	})
	return questionData
}

function updateImages () {
	let images = state.newItem.images;
	let sizes = state.newItem.sizes;
	let filteredImages = state.newItem.images.filter(function(image){
		image.remove = true;
		for (let x=0; x<sizes.length; x++) {
			if (image['size-id'] == sizes[x].id) {
				image.remove = false
			}
		}
		return (image.remove == false)
	})
	state.newItem.images = filteredImages;
}

function saveAnswers () {
	if (formPageName == 'main-info') {
		state.newItem.itemName = $('#' + 'item-name-input').val();
		state.newItem.producerName = $('#' + 'producer-name-input').val();
		return
	};
	if (formPageName == 'percentage-composition') {
		savePercentageComposition ();
		return
	};
	if (formPageName == 'sizes') {
		saveSizes ();
		updateImages ();
		return
	};
	if (formPageName == 'dimensions') {
		saveDimensions ();
		saveWeights ();
		return
	};
	if (formPageName == 'images') {
		savePatternNames ();
		return
	};
	if (formPageName == 'description') {
		state.newItem.description = $('#' + 'description-input').val();
		return
	};
	if (formPageName == 'fabrics') {
		saveFabrics ();
		return
	};
	let checkboxes = document.getElementsByClassName('form-input checkbox');
	Array.from(checkboxes).forEach(function(checkbox){
		state.newItem.answers[checkbox.id] = checkbox.checked;
	});

	let selects = $('.form-input .select');
	Array.from(selects).forEach(function(select){
		let parentId = Array.from(state.attributes).find(function(formCategory){
			return formCategory.id == select.id
		})['parent-id'];
		if (state.newItem.answers[parentId] == true || state.newItem.answers[parentId] == undefined) {
			state.newItem.answers[select.id] = $('#' + select.id).val();
		};
	});
	if (formPageName == 'others') {
		state.newItem.answers['release-date'] = $('#release-date-input').val();
	}
}

function saveFabrics () {
	let selects = $('.form-input .select');
	let formLayers = [];
	Array.from(selects).forEach(function(select){
		let formLayer = {};
		formLayer.id = select.id;
		formLayer['fabrics-names'] = $('#' + select.id).val();
		formLayers.push(formLayer);
	});
	formLayers.forEach(function(formLayer){
		let savedLayer = state.newItem.layers.find(function(lr){
			return formLayer.id == lr.id
		});
		if (!savedLayer) {
			let newLayer = {};
			newLayer.id = formLayer.id;
			newLayer['fabrics-names'] = $('#' + newLayer.id).val();
			state.newItem.layers.push(newLayer);
		}
	});
	for (let i=0; i<state.newItem.layers.length; i++) {
		let formLayer = formLayers.find(function(lr){
			return state.newItem.layers[i].id == lr.id
		});
		if (!formLayer) {
			state.newItem.layers.splice(i, 1)
		}
	}
	state.newItem.layers.forEach(function(savedLayer){
		let formLayer = formLayers.find(function(lr){
			return lr.id == savedLayer.id
		});
		if (!savedLayer['fabrics-names']) {
			savedLayer['fabrics-names'] = [];
		}
		let savedLayerFabrics = savedLayer['fabrics-names'];
		let formLayerFabrics = formLayer['fabrics-names'];
		for (let i=0; i<savedLayerFabrics.length; i++) {
			let formLayerFabric = formLayerFabrics.find(function(lr){
				return lr == savedLayerFabrics[i];
			});
			if (!formLayerFabric) {
				savedLayerFabrics.splice(i, 1);
			};
		};
		
		formLayerFabrics.forEach(function(formLayerFabric){
			let newFabric = savedLayerFabrics.find(function(lr){
				return lr == formLayerFabric
			});
			if (!newFabric) {
				savedLayerFabrics.push(formLayerFabric);
			};
		});
		if (savedLayerFabrics.length == 1) {
			saveOneFabricLayer (savedLayer);
		};
	});
}

function savePercentageComposition () {
	let layers = $('.layer')
	Array.from(layers).forEach(function(layer){
		let savedLayer = state.newItem.layers.find(function(lr){
			return lr.id == layer.id
		});
		savedLayer.fabrics = [];
		let inputs = $('.' + layer.id);
		Array.from(inputs).forEach(function(input){
			let fabric = {};
			fabric.name = input.getAttribute('name');
			fabric.percentage = input.value;
			savedLayer.fabrics.push(fabric);
		})

	})
}

function saveSizes () {
	let sizes = state.newItem.sizes;
	let newSizesNames = $('#sizes-input').val();
	let databaseSizes = state.sizes;
	if (sizes) {
		let sizesToDelete = [];
		for (let i=0; i<sizes.length; i++) {
			let newSize = newSizesNames.find(function(newSizeName){
				return sizes[i].name == newSizeName
			});
			if (!newSize) {
				sizesToDelete.push(i)
			};
		};
		for (let x=0; x<sizesToDelete.length; x++) {
			sizes.splice(sizesToDelete - x, 1)
		};
		newSizesNames.forEach(function(newSizeName) {
			let addedSizeName = sizes.find(function(size){
				return size.name == newSizeName
			});
			if (!addedSizeName) {
				let sizeData = databaseSizes.find(function(databaseSize){
					return newSizeName == databaseSize.name
				});
				sizes.push(sizeData);
			};
		});
	} else {
		state.newItem.sizes = [];
		newSizesNames.forEach(function(newSizeName){
			let sizeData = databaseSizes.find(function(databaseSize){
				return newSizeName == databaseSize.name
			});
			state.newItem.sizes.push(sizeData);
		});
	};
}

function savePatternNames () {
	let patterNamesInputs = $('.pattern-name');
	state.newItem.patterns = [];
	Array.from(patterNamesInputs).forEach(function(input){
		let pattern = {};
		pattern['pattern-nr'] = input.getAttribute('pattern-number');
		pattern.name = $('#' + input.id).val();
		state.newItem.patterns.push(pattern);
	})
}

function saveChosenCategoryData (chosenCategory) {
	state.newItem.categoryData = findCategoryData (chosenCategory, state.diaperCategories);
	const attributes = Object.values(state.newItem.categoryData.attributes);
	attributes.forEach(function(attribute){
		if (attribute.answer == true) {
			let attributeId = attribute.id;
			state.newItem.answers[attributeId] = attribute.answer;
		};
	});
}

function createPercentageCompositionPage (clickedButton, key) {
	let selectedLayers = [];
	state.newItem.layers.forEach(function(layer){
		layer.title = getQuestionText (layer.id).text;
		if (layer['fabrics-names'].length > 1) {
			selectedLayers.push(layer)
		};
	});
	createTemplate ('layers', formPageName, {'layers': selectedLayers});
	selectedLayers.forEach(function(layer){
		let fabrics = [];
		layer['fabrics-names'].forEach(function(fabricName){
			let fabric = {};
			fabric.name = fabricName;
			fabric['layer-id'] = layer.id;
			fabrics.push(fabric)
		})
		createTemplate ('fabrics-inputs', layer.id, {'fabrics': fabrics});
	})
}

function saveOneFabricLayer (layer) {
	layer.fabrics = [];
	let fabric = {};
	fabric.name = layer['fabrics-names'][0];
	fabric.percentage = 100;
	layer.fabrics.push(fabric);
}

function createDimensionsPage () {
	let sizes = state.newItem.sizes;
	createTemplate ('dimensions-page', formPageName, {'sizes': sizes});
	state.dimensions.forEach(function(dimension){
		let title = getQuestionText (dimension.id)
		createTemplate ('dimension-title', 'dimensions-titles', {'dimension-text': title.text});
	})
	createTemplate ('size-inputs-column', 'inputs-box', {'sizes': sizes});
	sizes.forEach(function(size){
		createTemplate ('size-input', size.id + '-inputs-box', {'dimensions': state.dimensions, 'size': size});
	})
	Array.from(document.getElementsByClassName('dimension-title')).forEach(function(title){
		title.style.height = document.getElementsByClassName('dimension-input')[0].offsetHeight + 'px';
	})
	createTemplate ('weight-input', formPageName, {'sizes': sizes});
	createTemplate ('form-page-title', 'weight-inputs-title', {'title': 'Przedział wagowy'})
}

function saveWeights () {
	let sizes = state.newItem.sizes;
	Array.from($('.weight-input-from')).forEach(function(input){
		let size = sizes.find(function(size){
			return size.id == input.getAttribute('size')
		});
		size['min'] = input.value;
	});
	Array.from($('.weight-input-till')).forEach(function(input){
		let size = sizes.find(function(size){
			return size.id == input.getAttribute('size')
		});
		size['max'] = input.value;
	});
}

function saveDimensions () {
	let sizes = state.newItem.sizes;
	let dimensions = state.dimensions;
	let inputs = document.getElementsByClassName('dimension-input');
	sizes.forEach(function(size){
		size.dimensions = [];
		Array.from(inputs).forEach(function(input){
			Array.from(dimensions).forEach(function(dimension){
				if (input.classList.contains(size.id) && input.classList.contains(dimension.id)) {
					let dimensionId = dimension.id;
					let dimensionData = {};
					dimensionData.id = dimension.id;
					dimensionData.value = input.value;
					size.dimensions.push(dimensionData);
				};
			});
		});
	});
}

function getDimensions () {
	state.dimensions.length = 0;
	let diaper = state.newItem.categoryData.attributes;
	const filteredAttributes = state.attributes.filter(function(attribute) {
		let attributeId = attribute.id;
		return (attribute.dimension == true && diaper[attributeId]);
	}).forEach(function(attribute){
		state.dimensions.push(attribute);
	})
}

function createDiaperCategoriesPage () {
	let diaperCategories = {'data': state.diaperCategories}
	createTemplate ('diaper-category', 'form-view-wrapper');
	createTemplate ('new-input', 'diaper-categories-input', diaperCategories);
	$('#diaper-categories-input').selectpicker();
}

function createSizesPage () {
	let sizes = {'data': state.sizes};
	createTemplate ('form-sizes', 'sizes');
	createTemplate ('new-input', 'sizes-input', sizes);
	$('#sizes-input').selectpicker();
}

let formPages = [
	{
		'name': 'Ogólne informacje',
		'id': 'main-info',
	},
	{
		'name': 'Rozmiary',
		'id': 'sizes',
	},
	{
		'name': 'Zdjęcia',
		'id': 'images',
	},
	{
		'name': 'Wymiary',
		'id': 'dimensions',
	},
	{
		'name': 'Budowa',
		'id': 'structure',
	},
	{
		'name': 'Materiały',
		'id': 'fabrics',
	},
	{
		'name': 'Skład procentowy',
		'id': 'percentage-composition',
	},
	{
		'name': 'Inne',
		'id': 'others',
	},
	{
		'name': 'Opis',
		'id': 'description',
	}
]


function getformPageNames () {
	return Array.from(formPages).map(function(formPage){
		return formPage.id
	})
}

export function findCategoryData (chosenCategory, categories) {
	return Array.from(categories).find(function(category){
		return category.name == chosenCategory
	})
}

export function getAttributes () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('form-categories/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      state.attributes.push(childData);
		    });
		    resolve ()
	  	});
	});
	return promise1
}

function getAttributesText () {
	let dbRef = firebase.database().ref('form-questions/');
	dbRef.once('value',   function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
	      var childData = childSnapshot.val();
	      state.questionsText.push(childData);
	    });
  	});
}

function getAnswersOptions () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('form-answers/');
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      state.answersOptions.push(childData);
		    });
		    resolve ()
	  	});
	  	
	});
	return promise1
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}

