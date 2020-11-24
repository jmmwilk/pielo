import * as menu from '../mocks/menu.js';
import * as productslist from '../views/productslist.js';
import * as form from '../views/form.js';

export function createSideBar (categoriesData) {
	let menuCategories = ['diaper-categories', 'sizes', 'brands', 'fabrics'];
	let data = {};
	data.categories = categoriesData;
	createSideBarTemplate (data);
	createNavItems (data, menuCategories)
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

function createSideBarTemplate (data) {
	let sideBarTemplate = $('#sidebar-template').html();
	let compiledSideBarTemplate = Handlebars.compile(sideBarTemplate)
	$('#page').append(compiledSideBarTemplate(data))
}

function createNavItems (data, menuCategories) {
	for (let i=0; i<menuCategories.length; i++) {
		for (let x=0; x<data.categories.length; x++) {
			if (menuCategories[i] == data.categories[x].id) {
				let category = data.categories[x]
				createNavTemplate (category);
			}
		}
	}
}

function createNavTemplate (category) {
	let navtemplate = $('#nav-template').html();
	let compiledNavTemplate = Handlebars.compile(navtemplate);
	$('#menu-template').append(compiledNavTemplate(category));

}



