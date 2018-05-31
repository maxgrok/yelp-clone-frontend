document.addEventListener("DOMContentLoaded", function(e){
	const endPoint = 'http://localhost:3000/api/v1/properties'
	let form = document.createElement('form')
	form.method= "PATCH"
	form.action = "#"
	let name_edit = document.createElement('input')
	name_edit.placeholder = "Name"
	name_edit.type = "text"
	let description_edit = document.createElement('input')
	description_edit.placeholder = "Description"
	description_edit.type = "text"
	let address_edit = document.createElement('input')
	address_edit.placeholder = "Address"
	address_edit.type = "text"
	let phone_number_edit = document.createElement('input')
	phone_number_edit.placeholder = "Phone Number"
	phone_number_edit.type = "text"
	let website_edit = document.createElement('input')
	website_edit.placeholder = "Website"
	website_edit.type = "text"
	//click 'save' button
	let button = document.createElement('button')
	button.innerText = "Create New Property"
	document.body.appendChild(form)
	form.appendChild(name_edit)
	form.appendChild(description_edit)
	form.appendChild(address_edit)
	form.appendChild(phone_number_edit)
	form.appendChild(website_edit)
	form.appendChild(button)

	form.addEventListener('submit', function(e){
		e.preventDefault()
		fetch(`http://localhost:3000/api/v1/properties/`, {
			method: "POST",
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({name: name_edit})
		})
		.then( (response) => { 
		   return response.json()
		})
		.then(json => console.log(json))
//clear all input fields to placeholder
		name_edit.placeholder = "Name"
		description_edit.placeholder = "Description"
	})

	Property.fetchProperty(endPoint)
})