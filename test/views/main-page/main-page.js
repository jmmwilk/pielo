import * as state from '/test/state.js';
import * as sidebarmenu from '/test/views/sidebar-menu/sidebarmenu.js';
import * as productslist from '/test/views/products-list/productslist.js';
import * as userPage from '/test/views/user-page/user-page.js';
import * as form from '/test/views/form/new-form.js';
import * as general from '/test/general.js';
import * as eventBus from '/test/eventBus.js';
import * as login from '/test/views/login/login.js';

export function createMainPage () {
	document.getElementById('application').innerHTML = '';
	createTemplate ('title-bar', 'application', {'normal-user': state.state.normalUser});
	createTemplate ('page', 'application');
	getSizes ();
	getDiaperCategories ().
	then(function() {
		createStartPage ();
		enableHomeClick ();
 		eventBus.eventBus.subscribe('userLoggedIn', function(){
 			adjustPageToUserLoggedIn ();
 		});
 		if (state.state.userLoggedIn) {
 			adjustPageToUserLoggedIn ();
 		}
 		eventBus.eventBus.subscribe('userLoggedOut', function(){
 			document.getElementById('login-icon').onclick = function() {
 				window.location.href='#login';
				general.updateHistory('#login');
				login.goToLoginScreen();
	 		};
 		});
 		if (!state.state.userLoggedIn) {
 			document.getElementById('login-icon').onclick = function() {
 				window.location.href='#login';
				general.updateHistory('#login');
				login.goToLoginScreen();
	 		};
 		};
	});
}

function adjustPageToUserLoggedIn () {
	document.getElementById('log-out-box').innerHTML = '';
	createTemplate('log-out-link', 'log-out-box');
	enableLogOutButton ();
	fillUserName ();
	document.getElementById('login-icon').onclick = function() {
		window.location.href='#user-page';
		general.updateHistory('#user-page');
		userPage.goToUserPage();
	};
}

export function fillUserName () {
	document.getElementById('user-name-box').innerHTML = state.state.userName;
}

function enableLogOutButton () {
	document.getElementById('log-out-link').onclick = function(){
		document.getElementById('log-out-box').innerHTML = '';
		firebase.auth().signOut();
		state.state.userLoggedIn = false;
		state.state.user = undefined;
		state.state.userRole = undefined;
		state.state.normalUser = undefined;
		state.state.producer = undefined;
		eventBus.eventBus.trigger('userLoggedOut');
		createMainPage ();
	};
}


function getSizes () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('sizes/');
		dbRef.once('value',   function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      state.sizes.push(childData);
		    });
		    resolve ()
	  	});
	});
}

function getDiaperCategories () {
	const promise = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('diaper-categories/');
		dbRef.once('value',   function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      state.diaperCategories.push(childData);
		    });
		    resolve ()
	  	});
	});
	return promise
}

export function createStartPage () {
	sidebarmenu.createSideBar ();
	productslist.createProductsList ();
}

function enableHomeClick () {
	let home = document.getElementById('home');
	home.onclick = function () {
		clearPage ();
		window.location.href='#main-page';
		general.updateHistory('#main-page');
		createStartPage ();
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
