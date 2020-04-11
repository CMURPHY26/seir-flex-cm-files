import React from "react";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import NewForm from "./components/NewForm.js";
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = process.env.REACT_APP_BASEURL;

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

fetch(baseURL + "/holidays")
  .then(
    data => {
      return data.json();
    },
    err => console.log(err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log(err)
  );

class App extends React.Component {
  state = {
    holidays: []
  };

  getHolidays = () => {
    fetch(baseURL + "/holidays")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData => this.setState({ holidays: parsedData }),
        err => console.log(err)
      );
  };

  handleAddHoliday = holiday => {
    const copyHolidays = [...this.state.holidays];
    copyHolidays.unshift(holiday);
    this.setState({
      holidays: copyHolidays,
      name: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        <NewForm baseURL={baseURL} handleAddHoliday={this.handleAddHoliday} />
        <table>
          <tbody>
            {this.state.holidays.map(holiday => (
              <tr key={holiday._id}>
                <td> {holiday.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.getHolidays();
  }
}

export default App;
