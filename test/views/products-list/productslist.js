import * as productpage from '/test/views/product-page/productpage.js';
import * as eventBus from '/test/eventBus.js';
import * as state from '/test/state.js';
import * as general from '/test/general.js';
import * as sizesList from '/test/sizes.js';

let database = firebase.database();

let clickedMenuItem;

export function createProductsList () {
	const promise = getDatabaseDiapers ();
	promise
	.then(function(diapers) {
		let isHeart;
		if (!state.state.producer) {
			isHeart = true
		}
	  	let loadedDiapers = {'diapers': diapers, 'isheart': isHeart};
	  	fillSizesInCard ();
	  	createProfileImageTemplate (false);
  		createTemplate ('main', 'page');
  		createTemplate ('items-page', 'main');
		createTemplate ('items-list', 'products-container', loadedDiapers);
		enableCardClick ();
		if (state.state.userRole == 'normalUser') {
			const promise = markFavourites ();
			promise.then(function(){
				enableGoToFavouritesPage (loadedDiapers);
				enableHeartChange ();
			});
		};
	});
}

export function createNewProductsList (navCategoryGroup, navCategory) {
	const promise = getDatabaseDiapers ();
	promise
	.then(function(diapers) {
		let items = [];
		let isSizeClicked;
		let diaperSizeToPrint;
	  	diapers.forEach(function(diaper) {
	  		if (navCategoryGroup == 'sizes') {
	  			isSizeClicked = true;
	  			let diaperSizeIds = diaper.sizes.map(function(size){
	  				return size.id
	  			});
	  			diaperSizeIds.forEach(function(diaperSizeId){
	  				let databaseSize = sizesList.sizes.find(function(databaseSize){
  						return (databaseSize.id == diaperSizeId)
  					});
  					let databaseSizeGroupName = databaseSize.groups.find(function(groupName){
  						return groupName == navCategory
  					});
  					if (databaseSizeGroupName) {
  						items.push(diaper)
  						diaperSizeToPrint = diaperSizeId;
  						return
  					}
	  			})
	  		};
	  		if (navCategoryGroup == 'diaper-categories') {
	  			isSizeClicked = false;
  				if (diaper['diaper-category-id'] == navCategory) {
  					items.push(diaper);
  				};
	  		};
	  	});
	  	let newItems = {'diapers': items}
		removeProductsList ();
		createProfileImageTemplate (isSizeClicked, diaperSizeToPrint)
		createTemplate ('main', 'page');
		createTemplate ('items-page', 'main');
		createTemplate ('items-list', 'products-container', newItems);	
		enableCardClick ();
	});
}

function enableGoToFavouritesPage (loadedDiapers) {
	let heartButton = document.getElementById('heart-button');
	heartButton.onclick = function () {
		if (window.location.hash != '#main-page') {
			
		}
		const promise = loadFavourites ();
		promise.then(function(favouriteDiapers){
			removeProductsList ();
			let ldDiapers = loadedDiapers.data;
			let newDiapers = [];
			ldDiapers.forEach(function(ldDiaper){
				favouriteDiapers.forEach(function(favouriteDiaper){
					if(ldDiaper.key == favouriteDiaper) {
						newDiapers.push(ldDiaper);
					};
				});
			});
			createTemplate ('main', 'page');
			createTemplate ('items-page', 'main');
			createTemplate ('items-list', 'products-container', {'diapers': newDiapers});	
			markFavourites ();
			enableCardClick ();
			enableHeartChange ();
		})
	}
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
		    };
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
				if (i==hearts.length - 1) {
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

export function removeProductsList () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}

export function getDatabaseDiapers () {
	const promise1 = new Promise ((resolve, reject) => {
		let ref = firebase.database().ref('mock-diapers/');
		let diapers = [];
		ref.once('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		    	var key = childSnapshot.key;
		      	var childData = childSnapshot.val();
		      	childData.key = key;
		      	diapers.push(childData);
		    });
		    resolve (diapers)
	  	});
	});
	return promise1
}

export function createProfileImageTemplate (isSize, chosenSizeId) {
	const promise = new Promise ((resolve, reject) => {
		let itemPreview = $('#items-list').html();
		Handlebars.registerHelper('printimage', function(){
			let filteredImage;
			if (isSize == false) {
				let filteredImages = this.images.filter(function(image){
					return (image['image-nr'] == 1 && image['pattern-nr'] == 1)
				});
				filteredImage = filteredImages[0];
			} else {
				filteredImage = this.images.find(function(image){
					return (image['size-id'] == chosenSizeId
					&& image['image-nr'] == 1
					&& image['pattern-nr'] == 1)
				});
			}
			return filteredImage.url
		})
		resolve()
	})
	return promise
}

export function enableAllDiapersClick () {
	let allDiapers = document.getElementById('all-diapers-nav');
	allDiapers.onclick = function () {
		removeProductsContainer ();
		createProductsList ();
	}
}

export function enableCardClick () {
	let cards = document.getElementsByClassName('card');
	Array.from(cards).forEach(function(card) {
		card.onclick = function () {
			document.getElementById('page').innerHTML = '';
			window.location.href='#product-page';
			general.updateHistory('#product-page');
			productpage.createProductScreen (card.dataset.key, 'productScreen');
		}
	})
}

function removeProductsContainer () {
	let page = document.getElementById('page');
	let main = document.getElementById('main');
	page.removeChild(main);
}

function fillSizesInCard () {
	let itemPreview = $('#pielucha-template').html();
	Handlebars.registerHelper('printsizes', function(){
		let print = '';
		let sizes = this.sizes;
		for (let i=0; i<sizes.length; i++) {
			if (i<sizes.length - 1) {
				print = print + sizes[i].shortcut + ', ';
			} else {
				print = print + sizes[i].shortcut
			};
		};
		return print
	});
}

function createTemplate (templateId, parentTemplate, data) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template(data));
}



