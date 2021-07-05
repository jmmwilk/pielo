import * as login from '/test/views/login/login.js';
import * as mainPage from '/test/views/main-page/main-page.js';
import * as productPage from '/test/views/product-page/productpage.js';
import * as userPage from '/test/views/user-page/user-page.js';
import * as form from '/test/views/form/new-form.js';
import * as general from '/test/general.js';
import * as state from '/test/state.js';
import * as eventBus from '/test/eventBus.js';

let siteHash;
let lastHash;

$(document).ready(function(){
	window.location.history = [];
	window.location.historyIndex = -1;
	// window.location.href='#main-page';
	// general.updateHistory('#main-page');
	// mainPage.createMainPage ();

	window.location.href='#login';
	general.updateHistory('#login');
	login.goToLoginScreen();

	login.checkForAuthStateChange ();

// 	addDataToDatabase ();
})

document.onmouseover = function() {
    //User's mouse is inside the page.
    window.innerDocClick = true;
}

document.onmouseleave = function() {
    //User's mouse has left the page.
    window.innerDocClick = false;
}

window.onhashchange = function() {
	let history = window.location.history;
	let index = window.location.historyIndex;
	let hash = window.location.hash;
//	console.log ('lastHash', lastHash)
	if (lastHash == '#new-form') {
	}
	if (lastHash == undefined) {
		lastHash = hash
	} 
	// console.log ('history', history)
	// console.log ('index', index)
	// console.log ('hash', hash)
	if (hash == history[index]) {
		if (window.innerDocClick) {
	        window.innerDocClick = false;
//	        console.log ('IN FORWARD')
	    }
	} else {
		if (window.innerDocClick) {
			index = index - 1;
	        window.innerDocClick = false;
//	        console.log ('IN BACK')
	    } else {
    		if (hash == history[index + 1]) {
    			window.location.historyIndex = index + 1;
//    			console.log ('OUT FORWARD')
    		}
    		if (hash == history[index - 1]) {
    			window.location.historyIndex = index - 1;
//    			console.log ('OUT BACK')
    		}
    		goToPage();
	    }
	}
}

function goToPage () {
	let hash = window.location.hash;
    if (hash == '#main-page') {
		mainPage.createMainPage ();
	};
	if (hash == '#product-page') {
		productPage.createProductScreen (state.currentProduct.key, state.currentProduct.view);
	};
	if (hash == '#edit-form') {
		form.goToForm ('editItem', state.currentProduct.diaperData, state.currentProduct.key);
	};
	if (hash == '#new-form') {
		form.goToForm ('newItem');
	};
	if (hash == '#user-page') {
		userPage.goToUserPage ();
	};
	if (hash == '#login') {
		login.goToLoginScreen ();
	};
}

function addDataToDatabase () {
		// let dbRef = firebase.database().ref('diaper-categories/-MF0Ea0U4Yi9TXqG1WSw/');
	// dbRef.once('value',   function(snapshot) {
	//     snapshot.forEach(function(childSnapshot) {
	//       var childData = childSnapshot.val();
	//       console.log('childData', childData)
	//       let answer = childData['answer'];
	//       if (!answer) {
	//       	return
	//       }
	//       var childKey = childSnapshot.key
	//       console.log('childKey', childKey)

	//       let newDbRef = firebase.database().ref('diaper-categories/-MF0Ea0U4Yi9TXqG1WSw/attributes/' + childKey)
	//       newDbRef.update(childData)

	//       let newDbRef = firebase.database().ref('diaper-categories/-MF0Ea0U4Yi9TXqG1WSw/' + childKey)
	//       newDbRef.set(null)

	//     });
 //  	});

// 	let dbRef = firebase.database().ref('form-categories/');
// 	let newDbRef = dbRef.push();
// 	newDbRef.set({
// 	  'id': 'production-country-poland',
// 	  'input-type': 'checkbox',
// //	  'question-type': 'dependent',
// 	  'form-page-name': 'others',
// //	  'dependent-questions': [{'id': 'waterproof-layer-fabrics'}],
// //		'parent-id': ''
// 	});


	// let dbRef = firebase.database().ref('form-questions/');
	// let newDbRef = dbRef.push();
	// let key = newDbRef.key
	// newDbRef.set({
	//   'attribute-id': 'applications',
	// });
	// let groupRef = firebase.database().ref('form-questions/' + key +'/text-groups')
	// let newGroupRef = groupRef.push();
	// newGroupRef.set({
	// 	'id': 'applications-main',
	//  	'text': 'Aplikacje',
	// })

	// let dbRef = firebase.database().ref('attributes-titles/');
	// let newDbRef = dbRef.push();
	// let key = newDbRef.key
	// newDbRef.set({
	//   'attribute-id': 'applications',
	// });
	// let groupRef = firebase.database().ref('attributes-titles/' + key +'/text-groups')
	// let newGroupRef = groupRef.push();
	// newGroupRef.set({
	// 	'id': 'applications-main',
	//  	'text': 'Aplikacje',
	// })

	
// 	let dbbRef = firebase.database().ref('form-answers/');
// 	let newDbbRef = dbbRef.push();
// 	newDbbRef.set({
// 	  'id': 'applications',
// //	  'for-multiple-questions': true,
// 	  'options': [
// 	  		{	
// 	  		'name': 'Aplikacja wełniana',
// 	  		},
// 	  		{	
// 	  		'name': 'Aplikacja z chusty',
// 	  		},
// 	  		{	
// 	  		'name': 'Haft',
// 	  		},
// 	  	]
// 	});
}

