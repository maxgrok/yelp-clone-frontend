document.addEventListener('DOMContentLoaded', function(e){
	const endpoint = "http://localhost:3000/api/v1/properties"
	let adapter = new Adapter(endpoint)
	adapter.fetchAndSetProperty()
	createForm();
	let newForm = document.getElementById('create-form')
	newForm.addEventListener('submit', function(e){
		e.preventDefault()
		console.log(e)
		prop = new Property(
			document.getElementById("id-new").value,
			document.getElementById("name-new").value, 
			document.getElementById("description-new").value, 
			document.getElementById("address-new").value, 
			document.getElementById("phone_number-new").value, 			
			document.getElementById("website-new").value
			)
		adapter.createProperty(prop); 
		prop.displayProperty(); 
	})
	let properties = document.getElementById('properties')
	properties.addEventListener('click', function(e){
		let id = document.getElementById("id").innerText
		id = Number(id);
	});
});

function createForm(){
	let body = document.getElementsByClassName('ui text container')[0]
	let createForm = document.createElement('form')
	createForm.id = "create-form"
	createForm.action ="#"
	createForm.method = "POST"
	let id = document.createElement('input')
	id.id = 'id-new'
	id.placeholder = "ID"
	let name = document.createElement('input')
	name.id = 'name-new'
	name.placeholder = "Name"
	let description = document.createElement('input')
	description.placeholder = "Description"
	description.id = "description-new"
	let address = document.createElement('input')
	address.placeholder = "Address"
	address.id = "address-new"
	let phone_number = document.createElement('input')
	phone_number.placeholder = "Phone Number"
	phone_number.id = "phone_number-new"
	let website = document.createElement('input')
	website.placeholder = "Website"
	website.id = "website-new"
	let button = document.createElement('button')
	button.innerText = "Create New Property"
	let hr = document.createElement('hr')
	body.appendChild(createForm)
	createForm.appendChild(id)
	createForm.appendChild(name)
	createForm.appendChild(description)
	createForm.appendChild(address)
	createForm.appendChild(phone_number)
	createForm.appendChild(website)
	createForm.appendChild(button)
	createForm.appendChild(hr)
}