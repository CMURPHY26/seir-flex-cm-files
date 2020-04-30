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

  handleDelete = (deletedNotice) => {
    fetch(`/notices/${deletedNotice.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      //filter creates extra efficiency for updating state and removing notice without doing another fetch
      const notices = this.state.notices.filter(
        notice => notice.id !== deletedNotice.id)
        this.setState({notices: notices})
    })
    .catch(error => console.log(error))

  }

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    fetch(`http://localhost:3000/notices/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(updatedNotice => {
     // go wild
     this.getNotices()
   })
   .catch(error => console.log(error))

  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd}/>
          <Main 
          notices={this.state.notices} handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
