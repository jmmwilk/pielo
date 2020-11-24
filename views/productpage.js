import * as diaperslist from '../mocks/diapers.js';
import * as productslist from '../views/productslist.js';
import * as reviewslist from '../mocks/reviews.js';
import * as form from '../views/form.js';
import * as state from '../state.js';

let database = firebase.database();

export function createProductScreen (key, view) {
	const promise = loadItemData (key);
	promise
	.then (function (diaper) {
		createPreviewScreen (diaper, view);
	})
}

// export function createProductScreen (card) {
// 	console.log('card', card)
// 	let indexNumber = card.dataset.indexnumber;
// 	let diapers = diaperslist.items.diapers;
// 	for (let i=0; i<diapers.length; i++) {
// 		if (indexNumber == diapers[i].indexnum) {
// 			fillProductMainInfo ();
// 			createProductPageTempate (i, diapers);
// 			createReviews (indexNumber);
// 		}
// 	};
// }

function createProductPageTempate (i, diapers) {
	let productPageTemplate = $('#product-page-template').html();
	let compiledProductPageTemplate = Handlebars.compile(productPageTemplate);
	$('#page').append(compiledProductPageTemplate(diaperslist.items.diapers[i]));
}

export function removeProductScreen () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}

function createReviews (indexNumber) {
	let selectedReviews = selectReviews (indexNumber);
	createReviewsTemplate (selectedReviews);
}

function selectReviews (indexNumber) {
	let selectedReviews = {'reviews': []};
	let reviews = reviewslist.items.reviews
	for (let i=0; i<reviews.length; i++) {
		if (indexNumber == reviews[i].indexnumber) {
			selectedReviews.reviews.push(reviews[i]);
		}
	}
	return selectedReviews
}

function createReviewsTemplate (selectedReviews) {
	let reviewTemplate = $('#review-template').html();
	let compiledReviewTemplate = Handlebars.compile(reviewTemplate);
	$('#reviews-container').html(compiledReviewTemplate(selectedReviews))
}

function createSizeButtons (diaper) {
	createSizeButtonsTemplate (diaper);
	let buttons = document.getElementsByClassName('size-button');
	Array.from(buttons).forEach(function(button){
		button.onclick = function (event) {
			let sizeData = {};
			let buttonId = event.target.id;
			let sizes = diaper.diaper.sizes;
			for (let i=0; i<sizes.length; i++) {
				if (buttonId == sizes[i].shortcut) {
					sizeData = {'size': sizes[i]};
				}
			}
			 createSizeRangeTemplate (sizeData);
		}
	})
}

function createSizeRangeTemplate (sizeData) {
	let sizeRangeTemplate = $('#size-range-template').html();
	let compiledSizeRangeTemplate = Handlebars.compile(sizeRangeTemplate);
	$('#size-description').html(compiledSizeRangeTemplate(sizeData));
}

function createSizeButtonsTemplate (diaper) {
	let sizeButtonsTemplate = $('#size-buttons-template').html();
	let compiledSizeButtonsTemplate = Handlebars.compile(sizeButtonsTemplate);
	$('#size-buttons-container').append(compiledSizeButtonsTemplate(diaper));
}

function createParametersTemplate (diaper) {
	let parametersTemplate = $('#parameters-template').html();
	let compiledParametersTemplate = Handlebars.compile(parametersTemplate);
	$('#parameters').html(compiledParametersTemplate(diaper));
}

function fillMockDiaperPreview (diaper) {
	createSizeButtons (diaper);
	createParametersTemplate (diaper);
}

export function createPreviewScreen (diaper, view) {
	console.log ('diaper', diaper)
	fillProductMainInfo ();
	fillSizesInfo ();
	createPreviewTemplate (diaper);
	if (view == 'productScreen') {
		createStarsBoxTemplate ();
		createReviewsBoxTemplate ();
		createAddReviewTemplate (diaper);
		createDetailReviewsSummaryTemplate ();
		createChildFormTemplate ();
//		stopProp ();
	}
	fillMockDiaperPreview (diaper);
	setClassesToParameters ();
}

function createPreviewTemplate (diaper) {
	let previewTemplate = $('#item-preview').html();
	let compiledPreviewTemplate = Handlebars.compile(previewTemplate);
	$('#page').html(compiledPreviewTemplate(diaper));
}

// function createPreviewTemplate (key) {
// 	let dbRef = firebase.database().ref('diapers-mocks/' + key + '/');
// 	let previewTemplate = $('#item-preview').html();
// 	let compiledPreviewTemplate = Handlebars.compile(previewTemplate);
// 	dbRef.on('value', function(snap){
// 		$('#page').html(compiledPreviewTemplate(snap.val()))
// 	})
// }

function loadItemData (key) {

	const promise = new Promise ((resolve, reject) => {
		let diaper;
		let dbRef = firebase.database().ref('diapers-mocks/' + key + '/');
		dbRef.on('value', function(snap){
			diaper = snap.val();
			resolve (diaper)
		})
	});
	return promise

	// let diaper;
	// let dbRef = firebase.database().ref('diapers-mocks/' + key + '/');
	// dbRef.on('value', function(snap){
	// 	diaper = snap.val();
	// 	console.log ('diaper', diaper)
	// })
	// console.log ('diaper', diaper)
	// return diaper
}

function fillProductMainInfo () {
	let itemPreview = $('#item-preview').html();
	Handlebars.registerHelper('printnewinfo', function(){
		return this.diaperCategory.name
	})
}

function fillSizesInfo () {
	let itemPreview = $('#item-preview').html();
	Handlebars.registerHelper('printsizesinfo', function(){
		return this.name + ' ' + this.min + ' - ' + this.max + ' kg';
	})
}

function addMarginToParameters () {
	let parameters = document.getElementsByClassName('parameters-row');
	Array.from(parameters).forEach(function(parameter){
		parameter.classList.add("mb-3");
	})
}

function setClassesToParameters () {
	let parameters = document.getElementsByClassName('parameters-row');
	Array.from(parameters).forEach(function(parameter){
		parameter.classList.add("mb-2");
	});
	let parametersLeft = document.getElementsByClassName('parameter-column-left');
	Array.from(parametersLeft).forEach(function(parameter){
		parameter.classList.add("col-6");
	});
	let parametersRight = document.getElementsByClassName('parameter-column-right');
	Array.from(parametersRight).forEach(function(parameter){
		parameter.classList.add("col-6");
	})
}

function getCategoryData (category) {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref(category + '/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      data.push(childData);
		    });
		    resolve (data)
	  	});
	});
	return promise1
}

function createReviewsBoxTemplate () {
	let reviewsBoxTemplate = $('#reviews-box-template').html();
	let compiledReviewsBoxTemplate = Handlebars.compile(reviewsBoxTemplate);
	$('#product-page').append(compiledReviewsBoxTemplate());
}

function createStarsBoxTemplate () {
	let starsBoxTemplate = $('#stars-box-template').html();
	let compiledStarsBoxTemplate = Handlebars.compile(starsBoxTemplate);
	$('#stars-box-wrapper').html(compiledStarsBoxTemplate());
}

function createDetailReviewsSummaryTemplate () {
	let template = $('#detail-reviews-summary-template').html();
	let compiletedTemplate = Handlebars.compile(template);
	$('#detail-summary-wrapper').append(compiletedTemplate());
}

function createAddReviewTemplate (diaper) {
	let template = $('#add-review-template').html();
	let compiledTemplate = Handlebars.compile(template);
	$('#add-review-form-wrapper').html(compiledTemplate(diaper));
}

function createChildFormTemplate() {
	let template = $('#add-review-child-template').html();
	let compiledTemplate = Handlebars.compile(template);
	$('#ar-child-wrapper').html(compiledTemplate());
}

function stopProp () {
	$('#ar-child-title').click(function( event ) {
	  	event.stopPropagation();
	});
}



// aria-expanded="false" aria-controls="ar-child-wrapper" data-toggle="collapse" href="#ar-child-wrapper"
//streched-link
//button
