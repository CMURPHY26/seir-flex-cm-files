import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    phone: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { title, author, phone } = this.state;
    const notice = {
      title: title,
      author: author,
      phone: phone,
    };

    if (this.props.notice) notice.id = this.props.notice.id;

    this.props.handleSubmit(event, notice);
  };

  componentDidMount() {
    if (this.props.notice) {
      const { title, author, phone, id } = this.props.notice;
      this.setState({
        title: title || "",
        author: author || "",
        phone: phone || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"title"}
          placeholder={"Notice Title"}
          type={"text"}
          value={this.state.title}
          id={"title"}
        />
        <Input
          handleChange={this.handleChange}
          name={"author"}
          placeholder={"Notice Author"}
          type={"text"}
          value={this.state.author}
          id={"author"}
        />
        <Input
          handleChange={this.handleChange}
          name={"phone"}
          placeholder={"Notice Phone"}
          type={"text"}
          value={this.state.phone}
          id={"phone"}
        />
        <input
          type="submit"
          value={this.props.notice ? "update this notice" : "add a notice"}
        />
      </form>
    );
  }
}

export default Form;