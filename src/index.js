document.addEventListener("DOMContentLoaded", function(e){
	const endPoint = 'http://localhost:3000/api/v1/properties'
	fetchProperty(endPoint);
	createPostForm();
	//includeEditForm();
	//includeDeleteForm();
})

function createPostForm(){
	let createForm = document.getElementById('create-form')
	let form = document.createElement('form')
	form.method = 'POST'
	form.id = "form"
	form.action = '#'
	let name_edit = document.createElement('input')
	name_edit.placeholder = 'Name'
	name_edit.id="name"
	name_edit.type = 'text'
	let description_edit = document.createElement('input')
	description_edit.placeholder = 'Description'
	description_edit.id="description"
	description_edit.type = 'text'
	let address_edit = document.createElement('input')
		address_edit.id="address"
	address_edit.placeholder = 'Address'
	address_edit.type = 'text'
	let phone_number_edit = document.createElement('input')
	phone_number_edit.placeholder = 'Phone Number'
	phone_number_edit.id = 'phone_number'
	phone_number_edit.type = 'text'
	let website_edit = document.createElement('input')
	website_edit.placeholder = 'Website'
	website_edit.id ="website"
	website_edit.type = 'text'
	//click 'save' button
	let button = document.getElementById('submit')
	button.class = "ui button"
	button.innerText = "Create New Property"
	createForm.appendChild(form)
	form.appendChild(name_edit)
	form.appendChild(description_edit)
	form.appendChild(address_edit)
	form.appendChild(phone_number_edit)
	form.appendChild(website_edit)
	form.appendChild(button)
	form.addEventListener('submit', function(e){
		e.preventDefault()
		
	})
}
function createPatchForm(){
	let form = document.createElement('form')
	form.method = 'PATCH'
	form.id = "create-update-form"
	form.action = '#'
	let name_edit = document.createElement('input')
	name_edit.placeholder = 'Name'
	name_edit.id="name"
	name_edit.type = 'text'
	let description_edit = document.createElement('input')
	description_edit.placeholder = 'Description'
	description_edit.id="description"
	description_edit.type = 'text'
	let address_edit = document.createElement('input')
		address_edit.id="address"

	address_edit.placeholder = 'Address'
	address_edit.type = 'text'
	let phone_number_edit = document.createElement('input')
	phone_number_edit.placeholder = 'Phone Number'
	phone_number_edit.id = 'phone_number'
	phone_number_edit.type = 'text'
	let website_edit = document.createElement('input')
	website_edit.placeholder = 'Website'
	website_edit.id ="website"
	website_edit.type = 'text'
	//click 'save' button
	let button = document.createElement('button')
	button.class = "ui button"
	button.innerText = 'Create New Property'	
	prop.appendChild(form)
	form.appendChild(name_edit)
	form.appendChild(description_edit)
	form.appendChild(address_edit)
	form.appendChild(phone_number_edit)
	form.appendChild(website_edit)
	form.appendChild(button)
}
function fetchProperty(endpoint){
		fetch(endpoint)
		.then(res => res.json())
		.then(json => json.forEach(property =>{
			let prop = new Property(property.name, property.description, property.address, property.phone_number, property.website)
			prop.createProperty();
	}))
}
