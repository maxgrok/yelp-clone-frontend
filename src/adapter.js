class Adapter{
	constructor(endpoint){
		this.endpoint = endpoint
	}

	fetchAndSetProperty(){
		fetch(this.endpoint)
		.then(response => response.json())
		.then(prop => {
			return prop.forEach(proper => {
				 let propert = new Property(proper.id, proper.name, proper.description, proper.address,proper.phone_number, proper.website)
				 propert.displayNewProperty();
				 return propert
					})
		})
	}

	createProperty(prop){
		fetch("http://localhost:3000/api/v1/properties/", {
			method:"POST", 
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  //make sure to serialize your JSON body
		  body: JSON.stringify({
		  	id: prop.id,
		    name: prop.name, 
		    description: prop.description, 
		    address: prop.address, 
		    phone_number: prop.phone_number, 
		    website: prop.website
		  })
		})
		.then(response => response.json())
		.then(json => {
			console.log(json)
			prop.displayProperty()
			});
	}

	// updateProperty(prop){
	// 	fetch(`http://localhost:3000/api/v1/properties/${prop.id}`, {
	// 		method:"PATCH", 
	// 		headers: {
	// 	    'Accept': 'application/json',
	// 	    'Content-Type': 'application/json'
	// 	  },
	// 	  //make sure to serialize your JSON body
	// 	  body: JSON.stringify({
	// 	  	id: prop.id,
	// 	    name: prop.name, 
	// 	    description: prop.description, 
	// 	    address: prop.address, 
	// 	    phone_number: prop.phone_number, 
	// 	    website: prop.website
	// 	  })
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => console.log(json))
	// }

	deleteProperty(prop){
		fetch("http://localhost:3000/api/v1/properties/", {
			method:"DELETE", 
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  //make sure to serialize your JSON body
		  body: JSON.stringify({
		  	id: prop.id,
		    name: prop.name, 
		    description: prop.description, 
		    address: prop.address, 
		    phone_number: prop.phone_number, 
		    website: prop.website
		  })
		})
		.then(response => response.json())
		.then(json => console.log(json)
			//remove DOM elements
			)
	}
}

