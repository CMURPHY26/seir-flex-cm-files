import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewForm from './components/NewForm';

let baseURL = 'http://localhost:3003';



class App extends React.Component {
  state = {
    animals: []
  }

  getAnimals = () => {
    fetch(baseURL + '/animals')
    .then( data => {
      return data.json()}, err => console.log(err))
    .then(parsedData => {
      console.log(parsedData)
      this.setState({animals: parsedData})
    },
      err => console.log(err)
    )
  }

  handleAdoptionToggle = (animal) => {
    fetch(baseURL + "/animals/" + animal._id, {
      method: "PUT",
      body: JSON.stringify({adopted: !animal.adopted}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => res.json())
    .then(resJson => {
         //copies the animals array in state to send back as a PUT
          const copyAnimals = [...this.state.animals]
          //findsIndex of the the animal in the array
          const findIndex = this.state.animals.findIndex(animal => animal._id === resJson._id)
          //Uses index to set the adopted property in state to what was passed back from the database for that particular animal
          copyAnimals[findIndex].adopted = resJson.adopted
          this.setState({animals: copyAnimals})
    })
  }

  handleAddAnimal = (animal) => {
    const copyAnimals = [animal, ...this.state.animals];
    this.setState({
      animals: copyAnimals
    })
  }

  handleOfficialAdoption = (animal) => {
    // fetch(baseURL + '/animals/' +)
  }

  componentDidMount() {
    this.getAnimals();
  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>Sunny Philadelphia Animal Shelter</h1>
        </header>
        <NewForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal}/>
        <table>
          <tbody>
            {this.state.animals.map(animal => {
              return(
                <tr key={animal._id}>
                  <td>{animal.name}</td>
                  <td><button onClick={()=>this.handleAdoptionToggle(animal)}>
                  {!animal.adopted ? "Pending Adoption" : "Adopted"}
                  </button></td>
                  <td><button onClick={()=>this.handleOfficialAdoption(animal)}>
                  Officially Adopted
                  </button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
