import * as diaperslist from '../mocks/diapers.js';
import * as productpage from '../views/productpage.js';

let clickedMenuItem;

export function createProductsList () {
	fillDiaperCards ();
	createDiapersTemplate ();
	printDiapers ();
	enableCardClick ();
}

export function removeProductsList () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}

function fillDiaperCards () {
	let pieluchaTemplate = $('#pielucha-template').html();
	Handlebars.registerHelper('printdiaper', function(){
		return this.name + ' ' + this.type + ' ' + this.fabricprint
	})
}

function createDiapersTemplate () {
	let pieluchaTemplate = $('#pielucha-template').html();
	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
	$('#page').append(compiledPieluchaTemplate(diaperslist.items));
}

function createNewDiapersTemplate (newItems) {
	let pieluchaTemplate = $('#pielucha-template').html();
	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
	$('#page').append(compiledPieluchaTemplate(newItems));
}

function printDiapers () {
	let menuItems = document.getElementsByClassName('menu-item');
	Array.from(menuItems).forEach(function(menuItem) {
		menuItem.onclick = function() {
			clickedMenuItem = menuItem;
			let category = findCategory ();
			let newItems = {'diapers': []} ;
			let dpr;
			for (let i=0; i<diaperslist.items.diapers.length; i++) {
				dpr = diaperslist.items.diapers[i][category].toLowerCase();
				if (dpr == clickedMenuItem.id) {
					newItems.diapers.push(diaperslist.items.diapers[i]);
				} else {
				}
			}
			removeProductsList ();
			createNewDiapersTemplate (newItems);
			fillDiaperCards ();
			enableCardClick ();
		}
	})
}

export function enableAllDiapersClick () {
	let allDiapers = document.getElementById('all-diapers-nav');
	allDiapers.onclick = function () {
		removeProductsContainer ();
		createProductsList ();
	}
}

function enableCardClick () {
	let cards = document.getElementsByClassName('card');
	Array.from(cards).forEach(function(card) {
		card.onclick = function () {
			removeProductsContainer ();
			productpage.createProductScreen (card);
		}
	})
}

function removeProductsContainer () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}

function findCategory () {
	let category;
	let isItType = clickedMenuItem.classList.contains('type');
	let isItFabric = clickedMenuItem.classList.contains('fabric');
	let isItSize = clickedMenuItem.classList.contains('size');
	let isItBrand = clickedMenuItem.classList.contains('brand');
	if (isItType == true) {
		category = 'name';
		return category
	};
	if (isItFabric == true) {
		category = 'fabric';
		return category
	};
	if (isItSize == true) {
		category = 'size';
		return category
	};
	if (isItBrand == true) {
		category = 'brand';
		return category
	};
}

function removeCards () {
	let productsContainer = document.getElementById('products-container')
	let cards = document.getElementsByClassName('card');
	Array.from(cards).forEach(function(card) {
		productsContainer.removeChild(card)
	})
}