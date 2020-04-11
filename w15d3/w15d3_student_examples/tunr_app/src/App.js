import React from 'react';
import './App.css';
import playlists from "./data.js"


class App extends React.Component {
  state = {
    playlists,
    title: "",
    artist: "",
    time: '0:00',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    
    const updatedSongs = [...this.state.playlists.songs, newSong]
    this.setState({playlists: {...playlists,songs:updatedSongs}, title: '', artist: "", time: ""});
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Tunr</h1>
        </header>
        <div className="App">
          <div className="playlist">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
              <label htmlFor="artist">Artist</label>
              <input type="text" name="artist" id="artist" value={this.state.artist} onChange={this.handleChange} />
              <label htmlFor="time">Time</label>
              <input type="text" name="time" id="time" value={this.state.time} onChange={this.handleChange} />
              <input type="submit" value="SUBMIT" />
            </form>
            <div>
              <h2>Preview our new song</h2>
              <h3>{this.state.title}</h3>
              <h4>{this.state.artist}</h4>
              <h5>{this.state.time}</h5>
            </div>
            <h3>{this.state.playlists.title}</h3>
            <table>
              <thead>
                <tr>
                <th>Artist</th>
                <th>Title</th>
                <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playlists.songs.map( (song, index) => { 
                  return(
                <tr key={index}>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.time}</td>
                </tr>
                  )
                })}
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    );
  }
}

///ORIGINAL DEFAULT SETUP CODE
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }



export default App;
