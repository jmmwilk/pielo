import * as productslist from '/test/views/products-list/productslist.js';

export function createSideBar (categoriesData) {
	let menuCategories = ['diaper-categories', 'sizes', 'brands', 'fabrics'];
	let data = {};
	data.categories = categoriesData;
	createTemplate ('sidebar', 'page', data);
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

function createNavItems (data, menuCategories) {
	for (let i=0; i<menuCategories.length; i++) {
		for (let x=0; x<data.categories.length; x++) {
			if (menuCategories[i] == data.categories[x].id) {
				let category = data.categories[x];
				createTemplate ('nav', 'menu-template', category);
			}
		}
	}
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}


