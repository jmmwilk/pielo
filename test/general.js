export function updateHistory(curr) {
	window.location.history.push(curr);
	window.location.historyIndex = window.location.historyIndex + 1;
    window.location.hash = curr;
}

// export function updateTotalHistory(curr) {
// 	window.location.history.push(window.location.hash);
// }

export function createTemplate (templateId, parentTemplate) {
	let template = Handlebars.templates[templateId];
	$('#' + parentTemplate).append(template());
}

export function collapseElement (elementId, parentId) {
	document.getElementById(parentId).setAttribute("data-toggle", "collapse");
	document.getElementById(parentId).setAttribute("aria-expanded", false);
	document.getElementById(parentId).setAttribute("href", "#" + elementId);
	document.getElementById(parentId).setAttribute("aria-controls", elementId);
	document.getElementById(elementId).setAttribute("collapse", "collapse");
	document.getElementById(elementId).classList.add('collapse')
}

export function submit () {
	const promise = new Promise ((resolve, reject) => {
		const forms = document.querySelectorAll('.needs-validation')
		let form = forms[0];
		let isValidated;
      	form.addEventListener('submit', function (event) {
	        if (!form.checkValidity()) {
		        event.preventDefault()
		        event.stopPropagation()
		        isValidated = false;
	        } else {
	        	isValidated = true
	        }
	        form.classList.add('was-validated')
	        resolve(isValidated)
      	}, false)
		
	})
	return promise
}