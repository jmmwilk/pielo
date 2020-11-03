import * as menu from '../mocks/menu.js';
import * as productslist from '../views/productslist.js';
import * as sidebarmenu from '../views/sidebarmenu.js';
import * as form from '../views/form.js';
import * as login from '../views/login.js';
import * as eventBus from '../eventBus.js';
import * as state from '../state.js';
import * as newsletterPage from '../views/newsletter-page.js';

$(document).ready(function(){
	newsletterPage.createNewsletterTemplate ();
	newsletterPage.enableSubmitClick ();
	eventBus.eventBus.subscribe('submit', newsletterPage.disableFormSubmission);
	eventBus.eventBus.subscribe('submit', newsletterPage.savePersonalData);
	// const promise = getCategories ();
	// promise.
	// then(function(data) {
	// 	const promise2 = getCategoriesData (data);
	// 	promise2.
	// 	then(function(categoriesData) {
	// 		createStartPage (categoriesData);
	// 		enableHomeClick (categoriesData);
	// 		login.goToLoginScreen (categoriesData);
	// 		enableButton (categoriesData);
	// 		eventBus.eventBus.subscribe('userLoggedIn', fillUserName);
	// 	});
	// });
})

function fillUserName () {
	let userNameBox = document.getElementById('user-name-box');
 	userNameBox.innerText = state.state.user.email
}

export function createStartPage (categoriesData) {
	sidebarmenu.createSideBar (categoriesData);
	productslist.createProductsList ();
}

function enableButton (categoriesData) {
	let button = document.getElementById('add-diaper');
	button.onclick = function() {
		clearPage ();
		form.createForm (categoriesData);
	}
}

function enableHomeClick (categoriesData) {
	let home = document.getElementById('home');
	home.onclick = function () {
		clearPage ();
		createStartPage (categoriesData);
	}
}

function clearPage () {
	let page = document.getElementById('page');
	page.innerHTML = '';
}

export function getCategories () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('categories/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      data.push(childData);
		    });
		    resolve (data)
	  	});
	  	
	});
	return promise1
}

export function getCategoriesData (data) {
	// let categoriesNames = [];
	// Array.from(data).forEach(function(data){
	//     let categoryName = data.id;
	//     categoriesNames.push(categoryName);
	// });
	let categories = data;
	let categoriesData = [];
	let count = 0;
	const promise = new Promise ((resolve, reject) => {
		Array.from(categories).forEach(function(category){
		    let dbRef = firebase.database().ref(category.id + '/');
		    let categoryData = [];
		    dbRef.once('value',   function(snapshot) {
			    snapshot.forEach(function(childSnapshot) {
			      var childData = childSnapshot.val();
			      categoryData.push(childData);
			    });
//			    console.log(JSON.stringify(count));
			    count = count + 1;
//			    console.log(JSON.stringify(categoryName));
//			    console.log(JSON.stringify(categoryData));

				let object = {};
				object.data = categoryData;
				object.name = category.name;
				object['menu-name'] = category['menu-name'];
				object.id = category.id;
				object.issubmenu = category.issubmenu;


			    categoriesData.push(object);
				// category.categoryData = categoryData;
				// category.name = categoryName;

			    if (count == categories.length) {
			    	resolve (categoriesData)
			    }
		  	});
		})
	});
	return promise
}

