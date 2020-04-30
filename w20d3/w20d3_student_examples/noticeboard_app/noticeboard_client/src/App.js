import React from 'react'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends React.Component {
  state = {
    notices: []
  }

  componentDidMount() {
    this.getNotices()
  }

  getNotices = () => {
    //changed local host to 3001 because we are 
    //using proxy in package json -- only use for development. You can also use relative urls and fetch "/notices" instead of below
    fetch('http://localhost:3000/notices')
      .then(response => response.json())
      .then(json => this.setState({notices: json}))
      .catch(error => console.error(error))
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3000/notices", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdNotice => createdNotice.json()).then(jsonedNotice => {
      //add notice to notices
      this.setState({
        //...spread operator to add new notice to notices
        notices: [jsonedNotice, ...this.state.notices]
      })
    }).catch(error => console.log(error))

  }


  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd}/>
          <Main notices={this.state.notices} />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
