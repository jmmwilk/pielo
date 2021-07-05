import * as productslist from '/test/views/products-list/productslist.js';
import * as mainPage from '/test/views/main-page/main-page.js';
import * as form from '/test/views/form/new-form.js';
import * as general from '/test/general.js';
import * as state from '/test/state.js';

let database = firebase.database();
let clickedSize;
let chosenPatternNr;
let chosenImageNr;

export function createProductScreen (key, view) {
	state.currentProduct.key = key;
	state.currentProduct.view = view;
	state.formType.type = 'edit-form';
	clickedSize = '';
	chosenPatternNr = 1;
	chosenImageNr = 1;
	document.getElementById('page').innerHTML = '';
	const promise = getAttributesTitles ();
	promise
	.then(function(){
		let newPromise = loadItemData (key, view)
		return newPromise
	})
	.then (function (diaperData) {
		let diaper = {'diaper': diaperData}
		createPreviewScreen (diaper, key, view);
	})
}

function getAttributesTitles () {
	const promise = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('attributes-titles/');
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      state.attributesTitles.push(childData);
		    });
		    resolve ()
	  	});
	});
	return promise
}

function createSizeButtons (diaper) {
	createTemplate ('size-buttons', 'size-buttons-container', {'diaper': diaper.diaper, 'container': 'main'});
	let buttons = $('.main-size-button');
	markFirstSizeButton (buttons);
	showWeightInfo (buttons[0], diaper);
	Array.from(buttons).forEach(function(button){
		button.onclick = function (event) {
			clickedSize = button.getAttribute('size');
			let label = button.parentElement;
			$(label).button('toggle')
			showWeightInfo (event.target, diaper);
			document.getElementById('images-left-box').innerHTML = '';
			document.getElementById('patterns-images-box').innerHTML = '';
			document.getElementById('profile-image-box').innerHTML = '';
			createImagesOnLeftSide (diaper);
			createProfileImage (diaper, chosenPatternNr, chosenImageNr);
			createPatternsProfileImages (diaper);

			enableMainImageChange (diaper);
			enablePatternChange (diaper);
		};
	});
}

function showWeightInfo (sizeButton, diaper) {
	let sizeData = {};
	let sizeName = sizeButton.getAttribute('size');
	let sizes = diaper.diaper.sizes;
	for (let i=0; i<sizes.length; i++) {
		if (sizeName == sizes[i].id) {
			sizeData = {'size': sizes[i]};
		};
	};
	document.getElementById('size-description').innerHTML = '';
	createTemplate ('size-range', 'size-description', sizeData);
}

function createFabrics (diaper) {
	let layers = diaper.diaper.layers;
	if (layers == undefined) {
		return
	}
	let parameters = [];
	layers.forEach(function(layer){
		let parameter = {};
		parameter.title = getParameterTitle(diaper, layer['id']);
		parameter.value = [];
		if (layer.fabrics == undefined) {
			return
		}
		parameter.values = [];
		layer.fabrics.forEach(function(fabric){
			let fabricValue = fabric.name + ' ' + fabric.percentage + '%';
			parameter.values.push({'value': fabricValue});
		})
		parameters.push(parameter);
	});
	createTemplate ('attribute', 'fabrics-parameters-group', {'parameters': parameters});
}

function createDimensions (diaper) {
	createTemplate ('dimensions', 'attributes-right', diaper);
	createTemplate ('size-buttons', 'size-buttons-dimensions', {'diaper': diaper.diaper, 'container': 'dimensions'});

	let buttons = $('.dimensions-size-button');
	createFirstSizeDimensions (diaper, buttons);
	markFirstSizeButton (buttons);
	Array.from(buttons).forEach(function(button){
		button.onclick = function (event) {
			let label = button.parentElement;
			$(label).button('toggle')
			let sizeName = event.target.getAttribute('size');
			let size = diaper.diaper.sizes.find(function(size){
				return sizeName == size.id
			});
			let dimensionsData = [];
			Array.from(size.dimensions).forEach(function(sizeDimension){
				let dimensionData = getDimensionTitle (sizeDimension.id, diaper);
				dimensionData.value = sizeDimension.value;
				dimensionsData.push(dimensionData);
			});
			document.getElementById('dimensions-wrapper').innerHTML = '';
			createTemplate ('dimensions-values', 'dimensions-wrapper', {'dimensions': dimensionsData});
			addMarginToParameters ();
		};
	});
}

function markFirstSizeButton (buttons) {
	let label = buttons[0].parentElement;
	$(label).button('toggle')
}

function createFirstSizeDimensions (diaper, buttons) {
	let firstButton = buttons[0];
	firstButton.classList.remove('btn-outline-secondary');
	firstButton.classList.add('btn-secondary');
	let sizeName = firstButton.getAttribute('size');
	let size = diaper.diaper.sizes.find(function(size){
		return sizeName == size.id
	});
	let dimensionsData = [];
	Array.from(size.dimensions).forEach(function(sizeDimension){
		let dimensionData = getDimensionTitle (sizeDimension.id, diaper);
		dimensionData.value = sizeDimension.value;
		dimensionsData.push(dimensionData);
	});
	document.getElementById('dimensions-wrapper').innerHTML = '';
	createTemplate ('dimensions-values', 'dimensions-wrapper', {'dimensions': dimensionsData});

}

function getDimensionTitle (dimensionId, diaper) {
	let dimensionData = {};
	Array.from(state.attributesTitles).forEach(function(attributeTitle){
		if (attributeTitle['attribute-id'] == dimensionId) {
			const textGroups = Object.values(attributeTitle['text-groups']);
			Array.from(textGroups).forEach(function(group){
				if (group.id == diaper.diaper['category-data'].attributes[dimensionId]['title-group-id']) {
					dimensionData['title'] = group.text;
					dimensionData['letter'] = group.letter;
					dimensionData['id'] = dimensionId;
					return
				}
			})
		}
	})
	return dimensionData
}

function fillDiaperPreview (diaper) {
	createSizeButtons (diaper);
	createTemplate ('parameters-wrapper', 'parameters', diaper);
	let parametersGroups = state.attributesOrder;
	parametersGroups.forEach(function(parametersGroup){
		createTemplate ('parameters-group-wrapper', 'attributes-left', {'parameters-group': parametersGroup});
		let parameters = getParameters (diaper, parametersGroup);
		let parametersBox = parametersGroup.id + '-parameters-group';

		createTemplate ('attribute', parametersBox, {'parameters': parameters});
	})
	createDimensions (diaper);
	createFabrics (diaper);
	let sizes = diaper.diaper.sizes
}

function getParameters (diaper, parametersGroup) {
	let parameters = [];
	let diaperAttributes = Object.keys(diaper.diaper.attributes);
	Array.from(parametersGroup.attributes).forEach(function(attribute){
		let diaperAttribute = diaperAttributes.find(function(diaperAtt){
			return attribute.id == diaperAtt
		});
		if (diaperAttribute !== undefined) {
			parameters.push(attribute)
		};
	});
	const filteredParameters = parameters.filter(function(parameter) {
		let parameterId = parameter.id;
		return (diaper.diaper['category-data'].attributes[parameterId].answer !== true)
	});

	let attributesToPrint = [];
	filteredParameters.forEach(function(parameter){
		let parameterId = parameter.id;
		let attributeToPrint = {};

		let attributeValue = diaper.diaper.attributes[parameterId];
		if (attributeValue == true) {
			attributeToPrint.tick = true;
			attributeToPrint.src = "/images/yes.png";
		}
		if (attributeValue == false) {
			attributeToPrint.tick = true;
			attributeToPrint.src = "/images/no.png";
		}
		if (attributeValue !== false && attributeValue !== true) {
			if (Array.isArray(attributeValue) == true && attributeValue.length > 1) {
				attributeToPrint.values = [];
				Array.from(attributeValue).forEach(function(attValue){
					attributeToPrint.values.push({'value': attValue})
				});
			} else {
				attributeToPrint.value = attributeValue;
			};
		};
		attributeToPrint.title = getParameterTitle (diaper, parameterId);
		attributesToPrint.push(attributeToPrint);
	});
	return attributesToPrint
}



function getParameterTitle (diaper, parameterId) {
	let diaperAttributes = diaper.diaper['category-data'].attributes;
	let titles = state.attributesTitles;
	let titleText;
	Array.from(titles).forEach(function(title){
		if (title['attribute-id'] == parameterId) {
			const textGroups = Object.values(title['text-groups']);
			Array.from(textGroups).forEach(function(group){
				if (group.id == diaperAttributes[parameterId]['title-group-id']) {
					titleText = group.text;
					return
				};
			});
		};
	});
	return titleText
}

export function createPreviewScreen (diaper, key, view) {
	let formDiaper = diaper;
	let images = diaper.diaper.images;
	clickedSize = diaper.diaper.sizes[0].id;
	let profileImage = images.find(function(image){
		return image['pattern-nr'] == 1 && image['image-nr'] == 1
	})
	diaper.diaper.profileImage = profileImage;
	fillProductMainInfo ();
	fillSizesInfo ();
	createTemplate ('product-page', 'page', diaper)
	if (view == 'productScreen') {
		createTemplate ('stars-box', 'stars-box-wrapper');
//		createTemplate ('reviews-box', 'product-page');
//		createTemplate ('add-review', 'add-review-form-wrapper', diaper);
//		createTemplate ('detail-reviews-summary', 'detail-summary-wrapper');
//		createTemplate ('add-review-child', 'ar-child-wrapper');
		if (state.state.userKey == diaper.diaper['producer-key']) {
			createTemplate ('edit-item-button', 'edit-diaper-wrapper');
			createTemplate ('delete-item-button', 'edit-diaper-wrapper');
		};
		if (state.state.normalUser) {
//			create template add review button
		};
		$('#edit-item-button').click( function(){
			state.whereToAddNewItem.addTo = 'mock-diapers-preview'
			clearPage ();
			window.location.href='#' + state.formType.type;
			general.updateHistory('#' + state.formType.type)
			state.currentProduct.diaperData = formDiaper;
			form.goToForm ('editItem', formDiaper, key)
		});
	};
	if (view == 'preview') {
		createTemplate ('back-and-add-item-buttons', 'product-page');
		$('#add-item-button').click( function(){
			let itemType;
			if (state.whereToAddNewItem.addTo == 'mock-diapers') {
				itemType = 'editItem';
			};
			if (state.whereToAddNewItem.addTo == 'mock-diapers-preview') {
				itemType = 'newItem';
				state.whereToAddNewItem.addTo = 'mock-diapers';
			};
			form.addMockDiaper (key, itemType)
			clearPage ();
			form.deleteStateNewItem ();
//			deletePreviewFromDatabase (key);
			createItemAddedPage ();
		});
		$('#back-to-form-button').click( function(){
			window.location.href='#' + state.formType.type;
			state.currentProduct.diaperData = formDiaper;
			form.goToForm ('editItem', formDiaper, key);
		});
	}
	fillDiaperPreview (diaper);
	createProfileImage (diaper, 1, 1);
	createImagesOnLeftSide (diaper)
	createPatternsProfileImages (diaper)
	setUIClassesToParameters ();
	enableMainImageChange (diaper);
	enablePatternChange (diaper);
	createTemplate ('pattern-name', 'pattern-name', {'name': diaper.diaper.patterns[0].name});
}

function createItemAddedPage () {
	clearPage ();
	createTemplate ('item-added', 'page');
	$('#go-to-main-page').click(function () {
		window.location.href='#main-page';
		general.updateHistory('#main-page');
		mainPage.createMainPage ();
	});
}

function deletePreviewFromDatabase (key) {
	let dbRef = firebase.database().ref('mock-diapers-preview/' + key);
    dbRef.remove();
}

function removeBorderFromImages (images) {
	Array.from(images).forEach(function(img){
		img.classList.remove('border-primary');
		img.classList.remove('border');
	});
}

function makeBorderOnImage (image) {
	image.classList.add('border');
	image.classList.add('border-primary');
}

function enableMainImageChange (diaper) {
	let images = $('.left-image');
	Array.from(images).forEach(function(image){
		image.onclick = function (event) {
			removeBorderFromImages (images);
			makeBorderOnImage (event.target);
//			chosenPatternNr = event.target.getAttribute('pattern-nr');
			chosenImageNr = event.target.getAttribute('image-nr');
			document.getElementById('profile-image-box').innerHTML = '';
			createProfileImage (diaper);
		}
	})
}

function enablePatternChange (diaper) {
	let images = $('.pattern-profile-image');
	Array.from(images).forEach(function(image){
		image.onclick = function (event) {
			removeBorderFromImages (images);
			makeBorderOnImage (event.target);
			chosenPatternNr = event.target.getAttribute('pattern-nr');
//			let imageNr = event.target.getAttribute('image-nr');
			document.getElementById('profile-image-box').innerHTML = '';
			document.getElementById('images-left-box').innerHTML = '';
			createImagesOnLeftSide (diaper);
			createProfileImage (diaper);
			enableMainImageChange (diaper);
			// let profileImage = document.getElementById('left-profile-image');
			// makeBorderOnImage (profileImage);
			document.getElementById('pattern-name').innerHTML = '';
			let pattern = diaper.diaper.patterns.find(function(ptrn){
				return ptrn['pattern-nr'] == chosenPatternNr
			});
			createTemplate ('pattern-name', 'pattern-name', {'name': pattern.name});
		}
	})
}

function createImagesOnLeftSide (diaper) {
	let patterns = diaper.diaper.images;
	const patternImages = patterns.filter(function(pattern){
		return (pattern['pattern-nr'] == chosenPatternNr && pattern['size-id'] == clickedSize)
	}).forEach(function(patternImage){
		createTemplate ('left-image', 'images-left-box', {'image': patternImage})
	})

	let imageInBorder = Array.from($('.left-image')).find(function(image){
		return image.getAttribute('image-nr') == chosenImageNr
	})
	if (!imageInBorder) {
		chosenImageNr = 1;
		imageInBorder = Array.from($('.left-image')).find(function(image){
			return image.getAttribute('image-nr') == 1
		})
	}
	makeBorderOnImage (imageInBorder);
}

function createProfileImage (diaper) {
	const patterns = diaper.diaper.images;
	let image = patterns.find(function(pattern){
		return pattern['image-nr'] == chosenImageNr 
		&& pattern['pattern-nr'] == chosenPatternNr
		&& pattern['size-id'] == clickedSize 
	})
	createTemplate ('profile-image', 'profile-image-box', {'image': image})
}

function createPatternsProfileImages (diaper) {
	let patterns = diaper.diaper.images;
	let height = document.getElementsByClassName('left-image')[0].parentElement.offsetHeight;
	const profileImages = patterns.filter(function(pattern){
		return (pattern['image-nr'] == 1 && pattern['size-id'] == clickedSize)
	})
	for (let i=0; i<profileImages.length; i++) {
		if (i%3 == 0 && i !== 0) {
			createTemplate ('devider', 'patterns-images-box');
		}
		createTemplate ('pattern-profile-image', 'patterns-images-box', {'image': profileImages[i]});
	}
	let imageInBorder = Array.from($('.pattern-profile-image')).find(function(image){
		return image.getAttribute('pattern-nr') == chosenPatternNr
	})
	makeBorderOnImage (imageInBorder);
}

function loadItemData (key, view) {
	const promise = new Promise ((resolve, reject) => {
		let dbRef
		if (view == 'productScreen') {
			dbRef = firebase.database().ref('mock-diapers/' + key + '/');
		};
		if (view == 'preview') {
			dbRef = firebase.database().ref('mock-diapers-preview/' + key + '/');
		};
		let diaper;
		dbRef.on('value', function(snap){
			diaper = snap.val();
			diaper['category-data'] = form.findCategoryData (diaper['diaper-category-name'], state.diaperCategories);
			state.downloadedItem.attributes = diaper.attributes;
			state.downloadedItem.sizes = diaper.sizes;
			state.downloadedItem.images = diaper.images;
			resolve (diaper)
		})
	});
	return promise
}

function fillProductMainInfo () {
	let itemPreview = $('#product-page').html();
	Handlebars.registerHelper('printnewinfo', function(){
		return this['item-name']
	})
}

function fillSizesInfo () {
	let itemPreview = $('#product-page').html();
	Handlebars.registerHelper('printsizesinfo', function(){
		return this.name + ' ' + this.min + ' - ' + this.max + ' kg';
	})
}

function addMarginToParameters () {
	let parameters = document.getElementsByClassName('parameters-row');
	Array.from(parameters).forEach(function(parameter){
		parameter.classList.add("my-3");
	})
}

function setUIClassesToParameters () {
	let parameters = document.getElementsByClassName('parameters-row');
	addMarginToParameters ();
	let parametersLeft = document.getElementsByClassName('parameter-column-left');
	Array.from(parametersLeft).forEach(function(parameter){
		parameter.classList.add("col-6");
	});
	let parametersRight = document.getElementsByClassName('parameter-column-right');
	Array.from(parametersRight).forEach(function(parameter){
		parameter.classList.add("col-6");
	})
}

function clearPage () {
	let page = document.getElementById('page');
	page.innerHTML = '';
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}
