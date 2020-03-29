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

  handleAddAnimal = (animal) => {
    const copyAnimals = [animal, ...this.state.animals];
    this.setState({
      animals: copyAnimals
    })
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
