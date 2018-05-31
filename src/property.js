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
	
	createProperty(){
		let properties = document.getElementById('properties')
		properties.class = "ui cards"
		let property = document.createElement('div')
		property.class ="card"
		property.id = "property"
			let id = document.createElement('h2')
			id.innerText = this.id
			id.class = "header"
			let name = document.createElement('p')
			name.innerText = this.name
			name.id = "name"
			let description = document.createElement('p')
			description.innerText = this.description
			description.id ="description"
			description.class= "description"
			let address = document.createElement('p')
			address.innerText = this.address
			address.id = "address"
			let phone_number = document.createElement('p')
			phone_number.innerText = this.phone_number
			phone_number.id = "phone_number"
			let website = document.createElement('p')
			website.innerText = this.website
			website.id = "website"
			let hr = document.createElement('hr')
			let editProp = document.createElement('a')
			editProp.href = "#"
			editProp.id = "edit"
			editProp.innerText = "Edit this Property"
			let br = document.createElement("br")
			let removeProp = document.createElement('a')
			removeProp.href = "#"
			removeProp.id = "remove"
			removeProp.innerText = "Delete This Property"
			properties.appendChild(property)
			property.appendChild(id)
			property.appendChild(name)
			property.appendChild(description)
			property.appendChild(address)
			property.appendChild(phone_number)
			property.appendChild(website)
			property.appendChild(editProp)
			property.appendChild(br)
			property.appendChild(removeProp)
	}

	deleteProperty(){
		fetch(`http://localhost:3000/api/v1/properties/${property.id}`, {
			method:"DELETE", 
			headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: this.name,
    description: this.description, 
    address: this.address, 
    phone_number: this.phone_number, 
    website: this.website
  })
		})
		.then(response => response.json())
		.then(json => console.log(json))
	}
}

Property.all = []