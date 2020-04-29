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
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }


  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside />
          <Main notices={this.state.notices} />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
