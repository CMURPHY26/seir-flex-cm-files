import React from "react";

class NewForm extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.baseURL + "/holidays", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resJson => {
        this.props.handleAddHoliday(resJson);
        this.setState({
          name: ""
        });
      })
      .catch(error => console.error({ Error: error }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="add a holiday"
        />
        <input type="submit" value="Add a Reason to Celebrate" />
      </form>
    );
  }
}

export default NewForm;
