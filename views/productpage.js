import * as diaperslist from '../mocks/diapers.js';
import * as productslist from '../views/productslist.js';

export function createProductScreen (card) {
	let indexNumber = card.dataset.indexnumber;
	let diapers = diaperslist.items.diapers;
	for (let i=0; i<diapers.length; i++) {
		if (indexNumber == diapers[i].indexnum) {
			fillProductMainInfo ();
			createProductPageTempate (i);
		}
	}
}

function createProductPageTempate (i, diapers) {
	let productPageTemplate = $('#product-page-template').html();
	let compiledProductPageTemplate = Handlebars.compile(productPageTemplate);
	$('#product-page').html(compiledProductPageTemplate(diaperslist.items.diapers[i]));
}

function fillProductMainInfo () {
	let productPageTemplate = $('#product-page-template').html();
	Handlebars.registerHelper('printinfo', function(){
		return this.name + ' ' + this.type + ' ' + this.fabricprint
	})
}

export function removeProductScreen () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}