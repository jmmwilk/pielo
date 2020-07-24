import * as menu from './menu.js';
import * as diaperslist  from './diapers.js';
// Q: Czemu diaberslist jest importowana tutaj oraz w productlist.js ?
import * as nameslist  from './diaperstype.js';
import * as productslist from './productslist.js';
import * as sidebarmenu from './sidebarmenu.js';
import * as form from './form.js';

$(document).ready(function(){
	sidebarmenu.createSideBar ();
	productslist.createProductsList ();
	enableButton ();
})

function enableButton () {
	let button = document.getElementById('add-diaper');
	button.onclick = function() {
		removePage ();
		form.createForm ();
	}
}

function removePage () {
	let application = document.getElementById('application');
	let page = document.getElementById('page');
	application.removeChild(page);
}


