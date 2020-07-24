import * as diaperslist from './diapers.js';
import * as productpage from './productpage.js';


// S: Powinnaś unikać używania zmiennych globalnych.
// Ta jest użyta wewnątrz dwóch powiązanych ze sobą funkcji. Nie ma potrzeby trzymać tego globalnie.
let clickedMenuItem;

function createProductsContainer () {
	// Q: Czemu potrzebujesz ręcznie tworzyć jakiegoś diva w javascript'cie, skoro mamy template'y?
	let productsContainer = document.createElement('div');
	productsContainer.id = 'products-container';
	productsContainer.className = 'd-flex flex-row row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100';
	let main = document.createElement('div');
	main.id = 'main';
	main.className = 'col-md-10 order-1';
	let page = document.getElementById('page');
	page.appendChild(main);
	main.appendChild(productsContainer);
}

export function createProductsList () {
	createProductsContainer ();
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
	// Q: po co tworzysz zmienną pieluchaTemplate, skoro nie jest nigdy użyta w tej funkcji?
	let pieluchaTemplate = $('#pielucha-template').html();

	Handlebars.registerHelper('printdiaper', function(){
		return this.name + ' ' + this.type + ' ' + this.fabricprint;
	})
}

function createDiapersTemplate () {
	let pieluchaTemplate = $('#pielucha-template').html();
	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
	$('#products-container').html(compiledPieluchaTemplate(diaperslist.items));
}

function createNewDiapersTemplate (newItems) {
	let pieluchaTemplate = $('#pielucha-template').html();
	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
	$('#products-container').html(compiledPieluchaTemplate(newItems));
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
			removeProductsContainer ();
			createProductsContainer ();
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
	// S: To się wydaje bardzo skomplikowane.
	//  Przechowaj po prostu kategorię atrybucie 'data' i wyciągnij tutaj.
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