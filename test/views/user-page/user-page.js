import * as general from '/test/general.js';
import * as form from '/test/views/form/new-form.js';
import * as sidebarmenu from '/test/views/sidebar-menu/sidebarmenu.js';
import * as state from '/test/state.js';
import * as productslist from '/test/views/products-list/productslist.js';

export function goToUserPage () {
	const promise = productslist.getDatabaseDiapers ();
	promise
	.then(function(diapers) {
  		const promise2 = filterDiapers (diapers);
  		promise2
		.then (function(filteredDiapers){
			clearPage ();
			createTemplate ('main', 'page');
			createTemplate ('user-page', 'main');
			createTemplate ('add-new-diaper', 'main-content');
			enableCreateFormButton ();
			productslist.createProfileImageTemplate (false);
			createTemplate ('items-page', 'main-content');
			let loadedDiapers = {'diapers': filteredDiapers};
			createTemplate ('items-list', 'products-container', loadedDiapers);
			productslist.enableCardClick ();
		});
	});
}

function filterDiapers (diapers) {
	const promise1 = new Promise ((resolve, reject) => {
		let filteredDiapers = diapers.filter(function(diaper){
			return (diaper['producer-key'] == state.state.userKey)
		})
		resolve (filteredDiapers)
	});
	return promise1
	
}

function enableCreateFormButton () {
	let button = document.getElementById('add-diaper');
	button.onclick = function() {
		state.whereToAddNewItem.addTo = 'mock-diapers-preview';
		clearPage ();
		window.location.href='#new-form';
		general.updateHistory('#new-form');
		form.goToForm ('newItem');
	}
}

function clearPage () {
	let page = document.getElementById('page');
	page.innerHTML = '';
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}