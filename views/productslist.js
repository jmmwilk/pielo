import * as diaperslist from '../mocks/diapers.js';
import * as productpage from '../views/productpage.js';
import * as eventBus from '../eventBus.js';
import * as state from '../state.js';

let database = firebase.database();

let clickedMenuItem;

export function createProductsList () {
	const promise = getDatabaseDiapers ();
	promise
	.then(function(diapers) {
	  	let loadedDiapers = {'data': diapers};
	  	fillSizesInCard ();
		fillDiaperCards ();
		createItemsPageTemplate(loadedDiapers)
		createItemsListTemplate (loadedDiapers);	
		enableCardClick ();
		enableGoToFavouritesPage (loadedDiapers);
		const promise = markFavourites ();
		promise.then(function(){
			enableHeartChange ();
		})
	})
}

function enableGoToFavouritesPage (loadedDiapers) {
	let heartButton = document.getElementById('heart-button');
	heartButton.onclick = function () {
		const promise = loadFavourites ();
		promise.then(function(favouriteDiapers){
			removeProductsList ();
			let ldDiapers = loadedDiapers.data;
			let newDiapers = [];
			ldDiapers.forEach(function(ldDiaper){
				favouriteDiapers.forEach(function(favouriteDiaper){
					if(ldDiaper.key == favouriteDiaper) {
						newDiapers.push(ldDiaper);
					}
				})
			})
			createFavouritesPageTemplate ();
			createItemsListTemplate ({'data': newDiapers});
			markFavourites ();
			enableCardClick ();
			enableHeartChange ();
		})
	}
}

function clearPage () {
	let page = document.getElementById('page');
	page.innerHTML = '';
}

function addDiaperToFavourites (heart) {
	let diaperKey = heart.getAttribute('key')
	let userKey = state.state.userKey;
	let dbRef = firebase.database().ref('users/' + userKey + '/favourites');
	var newDbRef = dbRef.push();
	newDbRef.set({
	  'key': diaperKey,
	});
}

function removeDiaperFromFavourites (heart) {
	let diaperKey = heart.getAttribute('key')
	let userKey = state.state.userKey;
	let dbRef = firebase.database().ref('users/' + userKey + '/favourites');
	dbRef.once('value',   function(snapshot) {
	    snapshot.forEach(function(childSnapshot) {
		    var favKey = childSnapshot.val().key;
		    if (diaperKey == favKey) {
		    	let key = childSnapshot.key		    	
		    	let itemRef = firebase.database().ref('users/' + userKey + '/favourites/' + key);
		    	itemRef.remove()
		    }
	    });
  	});

}

function loadFavourites () {
	const promise = new Promise ((resolve, reject) => {
		let hearts = document.getElementsByClassName('heart');
		let diapers = [];
		for (let i=0; i<hearts.length; i++) {
			let diaperKey = hearts[i].getAttribute('key');
			const promise = isDiaperInFavourites (diaperKey);
			promise.then(function(isDiaperInFav) {
				if (isDiaperInFav == true) {
					diapers.push(diaperKey);
				}
				if (i=hearts.length - 1) {
					resolve(diapers)
				}
			})
		}
	})
	return promise
}

function markFavourites () {
	const promise = new Promise ((resolve, reject) => {
		let hearts = document.getElementsByClassName('heart');
		for (let i=0; i<hearts.length; i++) {
			let diaperKey = hearts[i].getAttribute('key');
			const promise = isDiaperInFavourites (diaperKey);
			promise.then(function(isDiaperInFav) {
				if (isDiaperInFav == true) {
					hearts[i].src = "/images/heart-red-filled.png";
					hearts[i].setAttribute('favourite', 'favourite')
				}
			})
		}
		resolve()
	})
	return promise
}

function isDiaperInFavourites (diaperKey) {
	let userKey = state.state.userKey;
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('users/' + userKey + '/favourites/');
		let isDiaperInFav = false;
		dbRef.once('value',   function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
			    var key = childSnapshot.val().key;
			    if (diaperKey == key) {
			    	isDiaperInFav = true
			    	resolve (isDiaperInFav)
			    }
		    });
		    if (isDiaperInFav == false) {
		    	resolve (isDiaperInFav)
		    }
	  	});
	  	
	});
	return promise1
}

function enableHeartChange () {
	let hearts = document.getElementsByClassName('heart');
	Array.from(hearts).forEach(function(heart){
		heart.onclick = function () {
			let favourite = heart.getAttribute('favourite');
			if (favourite) {
				heart.src = "/images/hear2.png";
				heart.removeAttribute('favourite', favourite);
				removeDiaperFromFavourites (heart);
			} else {
				heart.src = "/images/heart-red-filled.png";
				heart.setAttribute('favourite', favourite);
				addDiaperToFavourites (heart);
			}
		}
		heart.onmouseover = function () {
			let favourite = heart.getAttribute('favourite');
			if (favourite) {
				return
			} else {
				heart.src = "/images/heart-red-border.png";
			}
		}
		heart.onmouseout = function () {
			let favourite = heart.getAttribute('favourite');
			if (favourite) {
				return
			} else {
				heart.src = "/images/hear2.png";
			}
		}
	});
	$('.heart-box').click(function( event ) {
	  	event.stopPropagation();
	});
}

function changeHeartClicked (heart) {
	heart.src = "/images/heart-red-filled.png";
}

function changeHeartUnClicked (heart) {
	heart.src = "/images/hear2.png";
}

export function createNewProductsList (navCategoryGroup, navCategory) {
	const promise = getDatabaseDiapers ();
	promise
	.then(function(diapers) {
	  	let loadedDiapers = {'data': diapers};
	  	let databaseDiapers = loadedDiapers.data;
	  	let items = [];
	  	databaseDiapers.forEach(function(databaseDiaper) {
	  		if (navCategoryGroup == 'sizes') {
	  			for (let i=0; i<databaseDiaper.sizes.length; i++) {
	  				if (databaseDiaper.sizes[i].id == navCategory) {
	  					items.push(databaseDiaper);
	  				}
	  			}
	  		}
	  		if (navCategoryGroup == 'diaper-categories') {
  				if (databaseDiaper.diaperCategory.id == navCategory) {
  					items.push(databaseDiaper);
  				}
	  		}
	  		if (navCategoryGroup == 'brands') {
  				if (databaseDiaper.brand.id == navCategory) {
  					items.push(databaseDiaper);
  				}
	  		}
	  		if (navCategoryGroup == 'fabrics') {
	  			if (databaseDiaper.outsideFabrics !== undefined) {
	  				for (let i=0; i<databaseDiaper.outsideFabrics.length; i++) {
		  				if (databaseDiaper.outsideFabrics[i].id == navCategory) {
		  					items.push(databaseDiaper);
		  				}
		  			}
	  			}
	  			if (databaseDiaper.innerFabrics !== undefined) {
	  				for (let i=0; i<databaseDiaper.innerFabrics.length; i++) {
		  				if (databaseDiaper.innerFabrics[i].id == navCategory) {
		  					items.push(databaseDiaper);
		  				}
		  			}
	  			}
	  		}
	  	})
	  	let newItems = {'data': items}
//		fillDiaperCards ();
		removeProductsList ();
		createItemsPageTemplate (newItems);
		createItemsListTemplate (newItems);
		enableCardClick ();
	})
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

function getDatabaseDiapers () {
	const promise1 = new Promise ((resolve, reject) => {
		let ref = firebase.database().ref('diapers-mocks/');
		let diapers = [];
		ref.once('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		    	var key = childSnapshot.key;
		      	var childData = childSnapshot.val().diaper;
		      	childData.key = key;
		      	diapers.push(childData);
		    });
		    resolve (diapers)
	  	});
	});
	return promise1
}

function createItemsListTemplate (loadedDiapers) {
	let pieluchaTemplate = $('#items-list-template').html();
	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
	$('#products-container').append(compiledPieluchaTemplate(loadedDiapers))
}

function createItemsPageTemplate (loadedDiapers) {
	let itemsPageTemplate = $('#items-page-template').html();
	let compiledItemsPageTemplate = Handlebars.compile(itemsPageTemplate);
	$('#page').append(compiledItemsPageTemplate(loadedDiapers));
}

function createFavouritesPageTemplate (loadedDiapers) {
	let favouritesPageTemplate = $('#favourites-page').html();
	let compiledFavouritesPageTemplate = Handlebars.compile(favouritesPageTemplate);
	$('#page').append(compiledFavouritesPageTemplate(loadedDiapers));
}


// function createNewDiapersTemplate (newItems) {
// 	let pieluchaTemplate = $('#pielucha-template').html();
// 	let compiledPieluchaTemplate = Handlebars.compile(pieluchaTemplate);
// 	$('#page').append(compiledPieluchaTemplate(newItems));
// }

// function printDiapers () {
// 	let menuItems = document.getElementsByClassName('menu-item');
// 	Array.from(menuItems).forEach(function(menuItem) {
// 		menuItem.onclick = function() {
// 			clickedMenuItem = menuItem;
// 			let category = findCategory ();
// 			let newItems = {'diapers': []} ;
// 			let dpr;
// 			for (let i=0; i<diaperslist.items.diapers.length; i++) {
// 				dpr = diaperslist.items.diapers[i][category].toLowerCase();
// 				if (dpr == clickedMenuItem.id) {
// 					newItems.diapers.push(diaperslist.items.diapers[i]);
// 				} else {
// 				}
// 			}
// 			removeProductsList ();
// 			createNewDiapersTemplate (newItems);
// 			fillDiaperCards ();
// 			enableCardClick ();
// 		}
// 	})
// }

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
			let key = card.dataset.key;
			productpage.createProductScreen (key, 'productScreen');
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

function fillSizesInCard () {
	let itemPreview = $('#pielucha-template').html();
	Handlebars.registerHelper('printsizes', function(){
		return this.shortcut + ', '
	})
}




