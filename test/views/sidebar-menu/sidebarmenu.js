import * as productslist from '/test/views/products-list/productslist.js';
import * as sizesList from '/test/sizes.js';
import * as state from '/test/state.js';

export function createSideBar () {
	createTemplate ('sidebar', 'page');
	createDiaperCategoriesNav ();
	createSizesNav ();
	productslist.enableAllDiapersClick ();
	enableNavClick ();
}



function enableNavClick () {
	let menuItems = document.getElementsByClassName('menu-item');
	Array.from(menuItems).forEach(function(menuItem) {
		menuItem.onclick = function() {
			let navCategoryGroup = menuItem.dataset.categorygroup;
			let navCategory = menuItem.dataset.category;
			productslist.createNewProductsList (navCategoryGroup, navCategory);

//			let newItems = {'diapers': []} ;
			// let dpr;
			// for (let i=0; i<diaperslist.items.diapers.length; i++) {
			// 	dpr = diaperslist.items.diapers[i][category].toLowerCase();
			// 	if (dpr == clickedMenuItem.id) {
			// 		newItems.diapers.push(diaperslist.items.diapers[i]);
			// 	} else {
			// 	}
			// }
			// removeProductsList ();
			// createNewDiapersTemplate (newItems);
			// fillDiaperCards ();
			// enableCardClick ();
		}
	})
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

export function removeSidebarMenu () {
	let sideBarMenu = document.getElementById('side-bar');
	let page = document.getElementById('page');
	page.removeChild(sideBarMenu);
}

function createSizesNav () {
	let sizesGroups = {'id':'sizes', 'menu-name':'Rozmiary', 'data': sizesList.sizesGroups}
	createTemplate ('nav', 'menu-template', sizesGroups);
}

function createDiaperCategoriesNav () {
	let diaperCategories = {'id':'diaper-categories', 'menu-name':'Rodzaje', 'data': state.diaperCategories}
	createTemplate ('nav', 'menu-template', diaperCategories);
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}



