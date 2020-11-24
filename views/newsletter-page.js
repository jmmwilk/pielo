
// $(document).ready(function(){
// 	createNewsletterTemplate ();
// 	enableSubmitClick ();
// })

export function createNewsletterTemplate () {
	let template = $('#newsletter-page-template').html();
	let compiledTemplate = Handlebars.compile(template);
	$('#application').html(compiledTemplate());
}

export function enableSubmitClick () {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
    	let button = document.getElementById('button');
		button.onclick = function () {
			form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }
	        form.classList.add('was-validated');
	        event.preventDefault();
	        savePersonalData ();
	        form.innerHTML = '';
	        document.getElementById('welcome-text').innerHTML = '';
	        document.getElementById('thank-you-text').classList.remove('d-none')

      	}, false);
	 	}
	});
}

function createThankYouTemplate () {
	let template = $('#thank-you-template').html();
	let compiledTemplate = Handlebars.compile(template);
	$()
}

function savePersonalData () {
	var forms = document.getElementsByClassName('needs-validation');
	Array.from(forms).forEach(function(form){
		if (form.classList.contains('was-validated') == true) {
			const emailInput = document.getElementById('email-input');
			const nameInput = document.getElementById('name-input');
			const nappiesUserInput = document.getElementById('nappies-user-checkbox');
			const producerInput = document.getElementById('producer-checkbox');
			const shopOwnerInput = document.getElementById('shop-owner-checkbox')
			let email = emailInput.value;
			let name = nameInput.value;
			let nappiesUser = false;
			let producer = false;
			let shopOwner = false;
			if (nappiesUserInput.checked == true) {
				nappiesUser = true;
			};
			if (producerInput.checked == true) {
				producer = true;
			};
			if (shopOwnerInput.checked == true) {
				shopOwner = true;
			};
			let dbRef = firebase.database().ref('newsletter/');
			var newDbRef = dbRef.push();
			newDbRef.set({
			  	'email': email,
				'name': name,
				'nappiesUser': nappiesUser,
				'producer': producer,
				'shopOwner': shopOwner
			});
		}
	})
}





