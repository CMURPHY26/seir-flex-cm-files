import React from 'react'


class NewForm extends React.Component{
    state = {
        name: '',
        species: '',
        breed: '',
        image: 'http://www.citydogshare.org/assets/default_dog-f1f5e5aa031ad0a956a936dc4fb4bde95c712f2ad1f99e883b5bc58d22aec668.jpg',
        age: 1,
        adopted: false,
        personalityTraits: []
    }

    // handleChange = (event) => {
    //     this.setState({[event.target.id]: event.target.value})
    // }

    //To handle multiple input changes
    handleInputChange = (event) => {
        //declaring target as event.target for use below
        const target = event.target;
        //setting up the value of the value variable to be a conditional ternary if the target.name is equal to adopted (checkbox in the form below) then the value will be target.checked (boolean if it is or is not checked) 
        const value = target.name === 'adopted' ? target.checked : target.value;
        const name = target.name;
        //this.setState is reconstructing the key value pair below with the variables created above.
        this.setState({
          [name]: value
        });
      }    

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + "/animals", {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                species: this.state.species,
                breed: this.state.breed,
                image: this.state.image,
                age: this.state.age,
                adopted: this.state.adopted,
                personalityTraits: this.state.personalityTraits
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then (resJson => {
          this.props.handleAddAnimal(resJson)
          this.setState({
            name: '',
            species: '',
            breed: '',
            image: '',
            age: 1,
            adopted: false,
            personalityTraits: []
          })
      }).catch (error => console.error({'Error': error}))
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={this.handleInputChange} placeholder="Aiko"/><br />

                <label htmlFor="species">Species:</label>
                <input type="text" name="species" id="species" onChange={this.handleInputChange} placeholder="Dog"/><br />

                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" id="breed" onChange={this.handleInputChange} placeholder="German Shepard"/><br />

                <label htmlFor="image">Image:</label>
                <input type="text" name="image" id="image" onChange={this.handleInputChange} value="http://www.citydogshare.org/assets/default_dog-f1f5e5aa031ad0a956a936dc4fb4bde95c712f2ad1f99e883b5bc58d22aec668.jpg"/><br />

                <label htmlFor="age">Age:</label>
                <input type="text" name="age" id="age" onChange={this.handleInputChange} placeholder={this.state.age}/><br />

                <label htmlFor="adopted">Adopted:</label>
                <input type="checkbox" name="adopted" id="adopted" onChange={this.handleInputChange}/><br />

                <label htmlFor="personalityTraits">Personality Traits:</label>
                <input type="text" name="personalityTraits" id="personalityTraits" onChange={this.handleInputChange} placeholder={this.state.personalityTraits}/><br />

                <input type="submit" value="Add an Animal"/>
            </form>
        )
    }
}



export default NewForm;