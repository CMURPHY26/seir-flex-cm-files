class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          baseURL: 'http://www.omdbapi.com/?',
          apikey: 'apikey=' + '98e3fb1f',
          query: '&t=',
          movieTitle: '',
          searchURL: ''
        }
    }    
    render () {
      return (
            <div className="App">
                <OMDBQueryForm />
            </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )