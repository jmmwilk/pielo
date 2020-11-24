import * as menu from '../mocks/menu.js';
import * as productPage from '../views/productpage.js';
import * as state from '../state.js';

let database = firebase.database();
let storage = firebase.storage();

export function createForm (data) {
	createPage1 (data);
	let diaper = {};
	diaper.images =[];
	$('#input-image').change(function(event) {
		if (event.target.files.length > 0) {
			showPreview (event);
			addProfileImageToStorage (diaper);
		}
	});
	let image = {'image-number': 1}
	addImageInputTemplate (image);
	let currentImageInput = 'input-image-' + 1;
	$('#' + currentImageInput).change(function(event) {
		if (event.target.files.length > 0) {
//			showPreview (event);
			addImageToStorage (diaper, currentImageInput);
			image['image-number'] = image['image-number'] + 1
			addImageInputTemplate (image);
			
			currentImageInput = 'input-image-' + image['image-number']
		}
	});
	let firebaseData = data;

	let button = document.getElementById('page1-button');
	button.onclick = function () {
		let validation = layersValidation ();
		if (validation == true) {
			createPage2 (firebaseData, diaper);
			let buttonPage2 = document.getElementById('page2-button');
			buttonPage2.onclick = function () {
				saveInputsPage2 (diaper);
				let key = addMockDiaper (diaper);
				let page = document.getElementById('page');
				page.innerHTML = '';
				productPage.createProductScreen (key, 'preview');
			}
		}
	}
}

function addImageInputTemplate (image) {
	let template = $('#add-image-template').html();
	let compiledTemplate = Handlebars.compile(template);
	$('#image-inputs-box').append(compiledTemplate(image));

}

function showPreview (event) {
	let source = URL.createObjectURL(event.target.files[0]);
	let image = document.createElement('img');
	let box = document.getElementById('file-preview');
	image.className = 'small-image mx-auto img-fluid img-thumbnail m-1';
	image.src = source;
	box.appendChild(image);
}

function addImageToStorage (diaper, currentImageInput) {
	const selectedFile = document.getElementById(currentImageInput).files[0];

	let dbRef = firebase.database().ref('images/');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  'image': 'small'
	});
	let key = newDbRef.getKey();

	let imageRef = storage.ref().child(key);
	imageRef.put(selectedFile)
	.then(function(snapshot) {
	  	return imageRef.getDownloadURL();
	})
	.then(function(downloadURL) {
		diaper.images.push(downloadURL);
		return downloadURL
	})
}

function addProfileImageToStorage (diaper) {
	const selectedFile = document.getElementById('input-image').files[0];

	let dbRef = firebase.database().ref('images/');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  'image': 'profile'
	});
	let key = newDbRef.getKey();

	let imageRef = storage.ref().child(key);
	imageRef.put(selectedFile)
	.then(function(snapshot) {
	  	return imageRef.getDownloadURL();
	})
	.then(function(downloadURL) {
		diaper.url = downloadURL;
		return downloadURL
	})
}

function createUploadFileTemplate (data) {
	let uploadFileTemplate = $('#upload-file-template').html();
	let compiledUploadFileTemplate = Handlebars.compile(uploadFileTemplate);
	$('#file-preview').append(compiledUploadFileTemplate(data));
}

function createPage1 (data) {
	createPage1Template ();
	createNewInput (data, 'diaper-categories', 'diaper-categories-input');
	createNewInput (data, 'sizes', 'sizes-input');
	createNewInput (data, 'fabrics', 'outside-fabrics-input');
	createNewInput (data, 'fabrics', 'inner-fabrics-input');
}

function layersValidation () {
	let validation;
	let outsideCheckbox = document.getElementById('outside-layer-input');
	let innerCheckbox = document.getElementById('inner-layer-input');
	let outsideFabrics = document.getElementById('outside-fabrics-input');
	let innerFabrics = document.getElementById('inner-fabrics-input');
	if (outsideCheckbox.checked == false && innerCheckbox.checked == false) {
		validation = false;
	} else {
		validation = true;
	}
	if (outsideCheckbox.checked == true) {
		outsideFabrics.setAttribute('required', 'required');
	} else {
		outsideFabrics.removeAttribute('required');
	}
	if (innerCheckbox.checked == true) {
		innerFabrics.setAttribute('required', 'required');
	} else {
		innerFabrics.removeAttribute('required');
	}
	return validation
}

function createPage2 (firebaseData, diaper) {
	saveInputs (firebaseData, diaper);
	createPage2Template (diaper);
	$('.page2input').selectpicker();
	createNewInput (firebaseData, 'closures', 'closures-input');
}

function createPage1Template () {
	let page1Template = $('#form-page1-template').html();
	let compiledPage1Template = Handlebars.compile(page1Template);
	$('#page').html(compiledPage1Template());
}

function createPage2Template (diaper) {
	let page2Template = $('#form-page2-template').html();
	let compiledPage2Template = Handlebars.compile(page2Template);
	$('#page').html(compiledPage2Template(diaper));
}

function saveInputs (categories, diaper) {
	let brandInput = $('#brand-input');
	let diaperCategoryInput = $('#diaper-categories-input');
	let sizesInput = $('#sizes-input');
	let outsideFabricsInput = $('#outside-fabrics-input');
	let innerFabricsInput = $('#inner-fabrics-input');
	let outside = document.getElementById('outside-layer-input');
	let inner = document.getElementById('inner-layer-input');
	let sizeNames = sizesInput.val();
	let diaperCategories = diaperCategoryInput.val();
	Array.from(categories).forEach(function(category){
		if (category.id == 'sizes') {
			let sizes = [];
			Array.from(sizeNames).forEach(function(sizeName){
			    let size = {};
			    size.name = sizeName;
			    for (let i=0; i<category.data.length; i++) {
					if (sizeName == category.data[i].name) {
						size.shortcut = category.data[i].shortcut;
						size.id = category.data[i].id;
					}
				}
			    sizes.push(size);
			})
			diaper.sizes = sizes;
		}
		if (category.id == 'diaper-categories') {
		    let cat = {};
		    cat.name = diaperCategories[0];
		    for (let i=0; i<category.data.length; i++) {
				if (diaperCategories[0] == category.data[i].name) {
					cat.id = category.data[i].id;
				}
			}
		    diaper.diaperCategory = cat;
		}
		if (category.id == 'brands') {
		    let brand = {};
		    brand.name = brandInput.val();
		    for (let i=0; i<category.data.length; i++) {
				if (brandInput.val() == category.data[i].name) {
					brand.id = category.data[i].id;
				}
			}
		    diaper.brand = brand;
		}
		if (category.id == 'fabrics') {
			let outsideFabs = outsideFabricsInput.val();
			if (outside.checked == false) {
				diaper.outside = false;
			} else {
				if (outsideFabricsInput.val().length > 1) {
					diaper.outsideMoreThan1 = true;
				} else {
					diaper.outsideMoreThan1 = false;
				}
				diaper.outside = true;
				let outsideFabrics = [];
				outsideFabs.forEach(function(outsideFab) {
					let fabric = {};
					for (let i=0; i<category.data.length; i++) {
						if (outsideFab == category.data[i].name) {
							fabric.name = outsideFab;
							fabric.id = category.data[i].id;
						}
					}
					outsideFabrics.push(fabric)
				})
				diaper.outsideFabrics = outsideFabrics
			}

			let innerFabs = innerFabricsInput.val();
			if (outside.inner == false) {
				diaper.inner = false;
			} else {
				if (innerFabricsInput.val().length > 1) {
					diaper.innerMoreThan1 = true;
				} else {
					diaper.innerMoreThan1 = false;
				}
				diaper.inner = true;
				let innerFabrics = [];
				
				innerFabs.forEach(function(innerFab) {
					let fabric = {};
					for (let i=0; i<category.data.length; i++) {
						if (innerFab == category.data[i].name) {
							fabric.name = innerFab;
							fabric.id = category.data[i].id;
						}
					}
					innerFabrics.push(fabric)
				})
				diaper.innerFabrics = innerFabrics;
			}
		}
	});
	
	return diaper
}

function addMockDiaper (diaper) {
	let dbRef = firebase.database().ref('diapers-mocks/');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  diaper
	});
	let key = newDbRef.getKey();
	return key
}

function fillProductMainInfo () {
	let itemPreview = $('#item-preview').html();
	Handlebars.registerHelper('printnewinfo', function(){
		return this.diaperCategory[0] + ' ' + this.outsideFabrics[0]
	})
}

function addDiaper (downloadURL, newDiaper) {
	let imageUrl = downloadURL;
	let dbRef = firebase.database().ref('diapers/');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  name: newDiaper.name,
	  size: newDiaper.size,
	  fabric: newDiaper.fabric,
	  brand: newDiaper.brand,
	  image: imageUrl
	});
	let key = newDbRef.getKey();
	createPreviewTemplate (key);
}

function saveInputsPage2 (diaper) {
	saveFabInputPage2 (diaper, 'outsideFabrics', 'outsideFabPers', 'page2-outside-fab-input', 'outsideMainFabric');
	saveFabInputPage2 (diaper, 'innerFabrics', 'innerFabPers', 'page2-inner-fab-input', 'innerMainFabric');
	saveSizesInputsPage2 (diaper, 'page2-sizes-min', 'page2-sizes-max');
	saveCountry (diaper);
	saveAttestsInputPage2 (diaper);
	saveClosuresInputPage2 (diaper);
	saveDescription (diaper);
}

function saveDescription (diaper) {
	let descriptionInput = $('#description');
	let description = descriptionInput.val();
	diaper.description = description;
}

function saveClosuresInputPage2 (diaper) {
	let closuresInput = $('#closures-input');
	let closures = closuresInput.val();
	diaper.closures = closures;
}

function saveAttestsInputPage2 (diaper) {
	let attestsInput = document.getElementById('attests');
	diaper.attests = attestsInput.value;
}

function saveCountry (diaper) {
	let country;
	let polandInput = document.getElementById('country-poland');
	let otherInput = document.getElementById('country-other-text-input');
	if (polandInput.checked == true) {
		country = 'Polska';
	} else {
		country = otherInput.value
	};
	diaper.country = country;
}

function saveFabInputPage2 (diaper, diaperFabId, diaperNumId, id, mainFabric) {
	let fabrics = diaper[diaperFabId];
	if (fabrics.length == 0 ) {
		return
	} else {
		diaper[diaperNumId] = [];
		let fabricPer = {};
		if (diaper[diaperFabId].length == 1) {
			fabricPer.name = fabrics[0].name;
			fabricPer.percentage = 100;
			diaper[diaperNumId].push(fabricPer);
			diaper[mainFabric] = fabrics[0].name;

		} else {
			let inputs = document.getElementsByClassName(id);
			let numbers = [];
			let biggestNumber = 0;
			let fabWithBiggestNum;
			Array.from(inputs).forEach(function(input){
			    let number = input.value;
			    numbers.push(number);
			})
			for (let i=0; i<fabrics.length; i++) {
				let fabricPer = {};
				fabricPer.name = fabrics[i].name;
				fabricPer.percentage = numbers[i];
				diaper[diaperNumId].push(fabricPer);
				// console.log ('numbers[i]', numbers[i]);
				// console.log ('biggestNumber', biggestNumber)
				if (numbers[i] > biggestNumber) {
					// console.log('bigger')
			    	biggestNumber = numbers[i];
			    	fabWithBiggestNum = fabrics[i].name;
			    	// console.log ('fabWithBiggestNum', fabWithBiggestNum)
			    }
			};
			// console.log('fabWithBiggestNum', fabWithBiggestNum)
			diaper[mainFabric] = fabWithBiggestNum;
		}
	}
}

function saveSizesInputsPage2 (diaper, minId, maxId) {
	let minInputs = document.getElementsByClassName(minId);
	let numbersMin = [];
	Array.from(minInputs).forEach(function(minInput){
	    let number = minInput.value;
	    numbersMin.push(number)
	})
	let numbersMax = [];
	let maxInputs = document.getElementsByClassName(maxId);
	Array.from(maxInputs).forEach(function(maxInput){
	    let number = maxInput.value;
	    numbersMax.push(number)
	})
	for (let i=0; i<diaper.sizes.length; i++) {
		diaper.sizes[i].min = numbersMin[i];
		diaper.sizes[i].max = numbersMax[i];
	}
	
	
}

function addCategoryToDatabase (newName, newId) {
	let dbRef = firebase.database().ref('categories/');
	let newDbRef = dbRef.push();
	newDbRef.set({
	  name: newName,
	  id: newId
	});
}

function addClosuresToDatabase (newName, newId) {
	let dbRef = firebase.database().ref('closures/');
	let newDbRef = dbRef.push();
	newDbRef.set({
	  name: newName,
	  id: newId
	});
}

function deleteDiapers () {
	let dbRef = firebase.database().ref('diapers/');
	dbRef.set(null);
}

function addCategoriesToDatabase () {
	let categories = [
		{'name': 'Rozmiar', 'id': 'size'},
	 	{'name': 'Materiał', 'id': 'fabric'},
	 	{'name': 'Producent', 'id': 'brand'}
	];
	let dbRef = firebase.database().ref('categories/');
	for (let i=0; i<categories.length; i++) {
		let value1 = categories[i].name;
		let value2 = categories[i].id;
		var newDbRef = dbRef.push();
		newDbRef.set({
		  name: value1,
		  id: value2
		});
	}
}





