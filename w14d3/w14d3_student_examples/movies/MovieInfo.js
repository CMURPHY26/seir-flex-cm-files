
class OMDBQueryForm extends React.Component {
  state = {
    movieTitle: ""
  };

  handleSubmit = e => {
    console.log("handleSubmit clicked");
    e.preventDefault();
    //To lift state the parent passes a method down to a child,
    //which passes data into the method to update state in parent

    //pass this info up to APP and let app take it from there
    //AKA lifting state:
    this.props.handleSubmit(this.state.movieTitle);

    //clear the form
    this.setState({ movieTitle: "" });
  };

  handleChange = event => {
    console.log("handleChange clicked");
    this.setState({
      //changes the below to "movieTitle" - when you don't know what the key value is
      [event.target.id]: event.target.value
    });
  };

  render() {
    // console.log("OMDB - render - state", this.state);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Find Movie Info" />
        </form>
        <a href={this.state.searchURL}>{this.state.searchURL}</a>
      </React.Fragment>
    );
  }
}


