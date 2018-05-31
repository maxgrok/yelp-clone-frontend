let propertyId = 0

class Property {
	constructor(name, description, address, phone_number, website){
		this.name = name
		this.description = description
		this.address = address
		this.phone_number = phone_number
		this.website = website
		this.id = ++propertyId
		Property.all.push(this)
	}

	static fetchProperty(endpoint){
		fetch(endpoint)
		.then(res => res.json())
		.then(json => json.forEach(property =>{
			let prop = new Property(property.name, property.description, property.address, property.phone_number, property.website)
			let name = document.createElement('p')
			name.innerText = prop.name
			name.id = "name"
			let description = document.createElement('p')
			description.innerText = prop.description
			description.id ="description"
			let address = document.createElement('p')
			address.innerText = prop.address
			address.id = "address"
			let phone_number = document.createElement('p')
			phone_number.innerText = prop.phone_number
			phone_number.id = "phone_number"
			let website = document.createElement('p')
			website.innerText = prop.website
			website.id = "website"
			let hr = document.createElement('hr')
			let editProp = document.createElement('a')
			editProp.href = "#"
			editProp.id = "edit"
			editProp.innerText = "Edit this Property"
			editProp.addEventListener('click', function(e){
				//add form, action ="#" and method 'post'
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
						button.innerText = "Save"
						document.body.appendChild(form)
						form.appendChild(name_edit)
						form.appendChild(description_edit)
						form.appendChild(address_edit)
						form.appendChild(phone_number_edit)
						form.appendChild(website_edit)
						form.appendChild(button)
				//add eventlistener on form
				form.addEventListener('submit', function(e){
					e.preventDefault()
							name_edit.innerText = name_edit.value
							console.log(name_edit.innerText)
							description_edit.innerText = description_edit.value
							address_edit.innerText = address_edit.value
							website_edit.innerText = website_edit.value
							phone_number_edit.innerText = phone_number_edit.value
						//convert them back to title and description after input is done by fetch PATCH
							fetch(`http://localhost:3000/api/v1/properties/${prop.id}`, {
								  method: "PATCH",
								  headers: {
								    'Accept': 'application/json',
								    'Content-Type': 'application/json'
								  },

								  //make sure to serialize your JSON body
								  body: JSON.stringify({name: name_edit.innerText, description: description_edit.innerText, address: address_edit.innerText, phone_number: phone_number_edit.innerText, website: website_edit.innerText})
								})
								.then( (response) => { 
								   return response.json()
								})
								.then(json => console.log(json))
						})
					})
			
			let br = document.createElement("br")
			let removeProp = document.createElement('a')
			removeProp.href = "#"
			removeProp.id = "remove"
			removeProp.innerText = "Delete This Property"
			removeProp.addEventListener('click', function(e){
				//remove elements from page
					document.body.removeChild(name)
				document.body.removeChild(description)
				document.body.removeChild(address)
				document.body.removeChild(phone_number)
				document.body.removeChild(website)
				document.body.removeChild(editProp)
				document.body.removeChild(br)
				document.body.removeChild(removeProp)
				//delete post by id
				fetch(`http://localhost:3000/api/v1/properties/${prop.id}`, {
					method: "DELETE",
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
				  },

				  //make sure to serialize your JSON body
				  body: JSON.stringify({
				    name: prop.name,
				    description: prop.description, 
				    address: prop.address, 
				    phone_number: prop.phone_number, 
				    website: prop.website
				  })
				})
				.then(response => response.json())
				.then(json => console.log(json))
			})
			document.body.appendChild(name)
			document.body.appendChild(description)
			document.body.appendChild(address)
			document.body.appendChild(phone_number)
			document.body.appendChild(website)
			document.body.appendChild(editProp)
			document.body.appendChild(br)
			document.body.appendChild(removeProp)
			// document.body.appendChild(hr)
			// editProp.addEventListener()
			// removeProp.addEventListener('click', function(e){

			// })
		}))
	}
}

Property.all = []