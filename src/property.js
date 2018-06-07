class Property {
	constructor(id, name, description, address, phone_number, website){
		this.name = name
		this.description = description
		this.address = address
		this.phone_number = phone_number
		this.website = website
		this.id = id
		Property.all.push(this)
	}
	
	displayNewProperty(){
		let properties = document.getElementById('properties');
		properties.className = "ui cards";
		let property = document.createElement('div');
		property.className ="card";
		property.id = "property";
		let id = document.createElement('h2');
		id.innerText = this.id;
		id.id = "id";
		id.className = "header";
		id.dataset.id = this.id;
		let name = document.createElement('p');
		name.innerText = this.name;
		name.id = `name-${this.id}`;
		let div = document.createElement('div');
		div.className = "description";
		let description = document.createElement('p');
		description.innerText = this.description;
		description.id =`description-${this.id}`;
		description.className = "description";
		let address = document.createElement('p');
		address.innerText = this.address;
		address.id = `address-${this.id}`;
		let phone_number = document.createElement('p');
		phone_number.innerText = this.phone_number;
		phone_number.id =  `phone_number-${this.id}`;
		let website = document.createElement('p');
		website.innerText = this.website;
		website.id = `website-${this.id}`;
		let hr = document.createElement('hr')
		let editProp = document.createElement('a')
		editProp.href = "#"
		editProp.id = `edit-${this.id}`
		editProp.innerText = "Edit this Property"
		let br = document.createElement("br")
		let removeProp = document.createElement('a')
		removeProp.href = "#"
		removeProp.id = `remove-${this.id}`
		removeProp.innerText = "Delete This Property"
		properties.appendChild(property)
		property.appendChild(div)
		div.appendChild(id)
		div.appendChild(name)
		div.appendChild(description)
		div.appendChild(address)
		div.appendChild(phone_number)
		div.appendChild(website)
		div.appendChild(editProp)
		div.appendChild(br)
		div.appendChild(removeProp)
		editProp.addEventListener('click', function (e){
			var updateForm = document.createElement('form');
			updateForm.id = "create-update-form";
			updateForm.method = "PATCH";
				let name_label = document.createElement('label')
				name_label.innerText = "Name:"
				let name_edit = document.createElement('input');
				name_edit.placeholder = name.innerText;
				name_edit.id = `name_edit-${id.innerText}`;

				let id_label = document.createElement('label')
				id_label.innerText = "Id:"
				let id_for_property = document.createElement('input');
				id_for_property.placeholder = id.innerText;
				id_for_property.className = "header";
				id_for_property.dataset.id = id.innerText;
				let div_edit = document.createElement('div');
				div_edit.className = "description_edit";

				let description_label = document.createElement('label')
				description_label.innerText = "Description:"
				let description_edit = document.createElement('input');
				description_edit.innerText = description.innerText;
				description_edit.placeholder = description.innerText
				description_edit.id =`description_edit-${id.innerText}`
				description_edit.className= "description_edit_input"

				let address_label = document.createElement('label')
				address_label.innerText = "Address:"
				let address_edit = document.createElement('input')
				address_edit.innerText = address.innerText
				address_edit.id = `address_edit-${id.innerText}`
				address_edit.placeholder = address.innerText

				let phone_number_label = document.createElement('label')
				phone_number_label.innerText = "Phone Number:"
				let phone_number_edit = document.createElement('input')
				phone_number_edit.placeholder = phone_number.innerText
				phone_number_edit.id =  `phone_number_edit-${id.innerText}`

				let website_label = document.createElement('label')
				website_label.innerText = "Website:"
				let website_edit = document.createElement('input')
				website_edit.placeholder = website.innerText
				website_edit.dataset.id = `website_edit-${id.innerText}`
				let hr = document.createElement('hr')
				let save = document.createElement('button')
				save.id = `${id.innerText}`
				save.innerText = "Save"
				let br = document.createElement("br")
				div.appendChild(updateForm)
				updateForm.appendChild(div_edit)
				div_edit.appendChild(id_label)
				div_edit.appendChild(id_for_property)
				div_edit.appendChild(hr)
				div_edit.appendChild(name_label)
				div_edit.appendChild(name_edit)
				div_edit.appendChild(hr)
				div_edit.appendChild(description_label)
				div_edit.appendChild(description_edit)
				div_edit.appendChild(hr)
				div_edit.appendChild(address_label)
				div_edit.appendChild(address_edit)
				div_edit.appendChild(hr)
				div_edit.appendChild(phone_number_label)
				div_edit.appendChild(phone_number_edit)
				div_edit.appendChild(hr)
				div_edit.appendChild(website_label)
				div_edit.appendChild(website_edit)
				div_edit.appendChild(hr)
				div_edit.appendChild(save)
				div_edit.appendChild(hr)
				div.removeChild(editProp)
				save.addEventListener('click', function(e){
					e.preventDefault()
					//fetch PATCH request here
					fetch(`http://localhost:3000/api/v1/properties/${id.innerText}`, {
						method:"PATCH", 
						headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  },
					  //make sure to serialize your JSON body
					  body: JSON.stringify({
					  	id: id.innerText,  
					    name: name_edit.value, 
					    address: address_edit.value, 
					    description: description_edit.value,
					    phone_number: phone_number_edit.value, 
					    website: website_edit.value
					  })
					})
						.then(response => response.json())
						.then(json => {
							 // update the DOM elements in the browse
							 console.log(json)
							 document.getElementById(`id`).innerText = json.id
							 document.getElementById(`name-${json.id}`).innerText = json.name
							 document.getElementById(`description-${json.id}`).innerText = json.description
							 document.getElementById(`address-${json.id}`).innerText = json.address
							 document.getElementById(`phone_number-${json.id}`).innerText = json.phone_number
							 document.getElementById(`website-${json.id}`).innerText = json.website
							 })
						updateForm.remove(0) 
					})
			})
		removeProp.addEventListener('click', function(e){
			fetch(`http://localhost:3000/api/v1/properties/${id.innerText}`, {
			method:"DELETE", 
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  //make sure to serialize your JSON body
		  body: JSON.stringify({
		  	id: id.innerText,  
		    name: name.value, 
		    address: address.value, 
		    description: description.value,
		    phone_number: phone_number.value, 
		    website: website.value
		  })
		})
		.then(response => response.json())
		.then(json => {
				console.log(json)
				properties.removeChild(property)
				property.removeChild(div)
				div.removeChild(id)
				div.removeChild(name)
				div.removeChild(description)
				div.removeChild(address)
				div.removeChild(phone_number)
				div.removeChild(website)
				div.removeChild(editProp)
				div.removeChild(br)
				div.removeChild(removeProp)
			})
		})
	}
}

Property.all = []
