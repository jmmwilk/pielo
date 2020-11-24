import * as state from '../state.js';

let database = firebase.database();
let storage = firebase.storage();
let viewNumber = 0;
let view;

export function createForm (data) {
	const promise = getFormCategories ();
	promise.then(function(){
		getQuestionsText ();
	})
	.then(function(){
		getAnswersOptions ();
	})
	.then(function(){
		createTemplate ('form-page-template', 'page')
		createDiaperCategoriesPage (data)
		document.getElementById('diaper-category-button').onclick = function () {
			let views = getViews ()
			view = views[viewNumber];
			saveDiaperCategoryData (data);
			clearFormWrapper ();
			createFormNavigation ();
			createFormPage ();
			activateNavItem ();
			document.getElementById('form-button').onclick = function() {
				saveAnswers ();
				viewNumber = viewNumber + 1
				view = views[viewNumber];
				clearForm();
				console.log('state.item.answers', state.item.answers)
				createFormPage ();
			}
		}
	})
}

function activateNavItem () {
	document.getElementById(view + '-nav').classList.add('active');
}

function createFormPage () {
	let data = {'view': view}
	createTemplate ('form-view-template', 'form-wrapper', data);
	createFormQuestions ();
}

function createFormQuestions () {
	let diaper = state.item.categoryData
	let questions = state.formCategories.categories;
	questions.forEach(function(question){
		let questionId = question.id;
		if (!diaper[questionId]) {
			return
		};
		if (question.view !== view) {
			return
		}
		if (question['question-type'] == 'main' && question['input-type'] == 'checkbox'){
			if (diaper[questionId].answer == 'ask') {
				createCheckboxInput (questionId);
				let collapse = true;
				if (question['dependent-questions']) {
					createDependentQuestions (question, questions, questionId, collapse)
				}
			}
			if (diaper[questionId].answer == true) {
				let collapse = true;
				if (question['dependent-questions']) {
					createDependentQuestions (question, questions, questionId, collapse)
				}
			}
		};
		if (question['question-type'] == 'dependent'
			&& question['parent-id'] !== view
			&& state.item.answers['parent-id'] == true) {
			createSelectInput (questionId)
		}
	})
}

function createDependentQuestions (question, questions, questionId, collapse) {
	Array.from(question['dependent-questions']).forEach(function(depQuestion){
		let depQuestionId = depQuestion.id
		console.log('depQuestionId', depQuestionId)
		let depQuestionData = findDependentQuestionData (questions, depQuestionId);
		if (state.item.categoryData[depQuestionId].answer == 'ask'
			&& depQuestionData['input-type'] == 'select') {
			document.getElementById(questionId).setAttribute("data-toggle", "collapse");
			document.getElementById(questionId).setAttribute("aria-expanded", false);
			document.getElementById(questionId).setAttribute("href", "#" + depQuestionId + '-box');
			document.getElementById(questionId).setAttribute("aria-controls", depQuestionId + '-box');
			createSelectInput (depQuestionId);
			if (collapse == true) {
				document.getElementById(depQuestionId + '-box').setAttribute("collapse", "collapse");
				document.getElementById(depQuestionId + '-box').classList.add('collapse')
			}
		}
	})
}

function findDependentQuestionData (questions, depQuestionId) {
	let dependentQuestion;
	Array.from(questions).forEach(function(question){
		if (question.id == depQuestionId) {
			dependentQuestion = question
			return
		}
	})
	return dependentQuestion
}

function createCheckboxInput (questionId) {
	let data = {};
	let diaper = state.item.categoryData;
	let questions = state.formCategories['questions-text']
	let questionText;
	Array.from(questions).forEach(function(question){
		if (question['question-id'] == questionId) {
			Array.from(question.options).forEach(function(option){
				if (option.name == diaper[questionId]['answer-options']) {
					questionText = option.text;
					data['text'] = questionText
					data['question-id'] = questionId;					
				}
			})
		}
	})
	createTemplate ('checkbox-input-template', view, data);
}

function createSelectInput (questionId) {
	let data = {};
	let diaper = state.item.categoryData;
	let questions = state.formCategories['questions-text'];
	let questionText;
	Array.from(questions).forEach(function(question){
		if (question['question-id'] == questionId) {
			Array.from(question.options).forEach(function(option){
				if (option.name == diaper[questionId]['answer-options']) {
					questionText = option.text;
					data['text'] = questionText
					data['question-id'] = questionId;
				}
			})
		}
	})
	let answersData = {};
	createTemplate ('select-input-template', view, data);
	let answers = state.formCategories['answers-options'];
	Array.from(answers).forEach(function(answer) {
		if (answer.id == diaper[questionId]['answer-options']) {
			answersData.data = answer.options
		}
	})
	createTemplate ('new-input-template', questionId, answersData);
	$('#' + questionId).selectpicker();
}

function saveAnswers () {
	let checkboxes = document.getElementsByClassName('form-input checkbox');
	Array.from(checkboxes).forEach(function(checkbox){
		if (checkbox.checked == true) {
			state.item.answers[checkbox.id] = true;
		} else {
			state.item.answers[checkbox.id] = false;
		}
	})

	let selects = $('.form-input .select');
	Array.from(selects).forEach(function(select){
		Array.from(state.formCategories.categories).forEach(function(formCategory){
			if (formCategory.id == select.id) {
				let parentId = formCategory['parent-id'];
				if (state.item.answers[parentId] == true) {
					state.item.answers[select.id] = $('#' + select.id).val();
				}
				
			}
		})
//		state.item.answers[select.id] = $('#' + select.id).val();
	})

	// let flaps = document.getElementById('flaps')
	// if (flaps !== null) {
	// 	if (flaps.checked == true) {
	// 		state.item.answers.flaps = true;
	// 	} else {
	// 		state.item.answers.flaps = false;
	// 	}
	// }
	// let pocket = document.getElementById('pocket');
	// if (pocket !== null) {
	// 	console.log('zupa')
	// 	if (pocket.checked == true) {
	// 		state.item.answers.pocket = true;
	// 		state.item.answers['pocket-types'] = $('#pocket-types-select').val();
	// 	} else {
	// 		state.item.answers.pocket = false;
	// 		state.item.answers['pocket-types'] = false;
	// 	}
	// }
}

function saveDiaperCategoryData (data) {
	state.item.category = $('#diaper-categories-input').val()[0]
	let categoryData = findCategoryData (data);
	state.item.categoryData = categoryData;
}

function createDiaperCategoriesPage (data) {
	let diaperCategories = getDiaperCategories (data);
	createTemplate ('diaper-category-template', 'form-page-wrapper');
	createTemplate ('new-input-template', 'diaper-categories-input', diaperCategories);
	$('#diaper-categories-input').selectpicker();
}

function createFormNavigation () {
	createTemplate ('form-template', 'form-page-wrapper')
	createTemplate ('nav-item-template', 'nav-items-wrapper', navItems);
}

// function createStructurePage (formCategories) {
// 	let categoryData = state.item.categoryData
// 	createTemplate ('structure-template', 'form-wrapper');
	
// 	if (categoryData.flaps == 'ask') {
// 		createTemplate ('flaps-template', 'structure');
// 	};
// 	if (categoryData.pocket == 'ask') {
// 		createTemplate ('pocket-template', 'structure');
// 	}
// 	if (categoryData.pocket == 'ask' || categoryData.pocket == true) {
// 		let pocketTypes = {'data': formCategories['pocket']} ;
// 		createTemplate ('pocket-types-template', 'structure');
// 		createTemplate ('new-input-template', 'pocket-types-select', pocketTypes);
// 	}
// 	if (categoryData.pocket == true) {
// 		document.getElementById('pocket-types').classList.remove("collapse");
// 	}
// 	$('.form-input').selectpicker();
// 	createTemplate ('button-template', 'structure');
// }

function getDiaperCategories (data) {
	let diaperCategories;
	for (let i=0; i<data.length; i++) {
		if (data[i].id == 'diaper-categories') {
			diaperCategories = data[i];
			return diaperCategories
		}
	}
}

let navItems = {
	items: [
		{
			'name': 'Budowa',
			'id': 'structure',
		},
		{
			'name': 'Materiały',
			'id': 'fabrics',
		},
		{
			'name': 'Wymiary',
			'id': 'dimensions',
		},
		{
			'name': 'Inne',
			'id': 'others',
		},
		{
			'name': 'Opis',
			'id': 'description',
		}
	]
}

function getViews () {
	let formViews = [];
	Array.from(navItems.items).forEach(function(navItem){
		formViews.push(navItem.id)
	})
	return formViews
}

// let views = ['structure', 'fabrics', 'dimensions', 'others', 'description'];

function findCategoryData (categories) {
	let chosenCategory;
	Array.from(categories).forEach(function(category){
		if (category.id == 'diaper-categories') {
			category.data.forEach(function(cat){
				if (cat.name == state.item.category) {
					chosenCategory = cat
					return
				}
			})
		}
	})
	return chosenCategory
}

export function getFormCategories () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('form-categories/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      data.push(childData);
		    });
		    state.formCategories.categories = data;
		    resolve (data)
	  	});
	  	
	});
	return promise1
}

function getQuestionsText () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('form-questions-text/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      data.push(childData);
		    });
		    state.formCategories['questions-text'] = data;
		    resolve (data)
	  	});
	  	
	});
	return promise1
}

function getAnswersOptions () {
	const promise1 = new Promise ((resolve, reject) => {
		let dbRef = firebase.database().ref('form-answers/');
		let data = [];
		dbRef.once('value',   function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      data.push(childData);
		    });
		    state.formCategories['answers-options'] = data;
		    resolve (data)
	  	});
	  	
	});
	return promise1
}

function clearFormWrapper () {
	document.getElementById('form-page-wrapper').innerHTML = '';
}

function clearForm () {
	document.getElementById('form-wrapper').innerHTML = '';
}

function createTemplate (templateId, parentId, data) {
	let template = $('#' + templateId).html();
	let compiledTemplate = Handlebars.compile(template);
	$('#' + parentId).append(compiledTemplate(data));
}