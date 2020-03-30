import React from 'react'


class LoginForm extends React.Component {
    state = {
        currentUser: null
    }

    closeModal = () => {
        document.querySelector('.LoginModal').style.display = 'none'
    }

    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value});
    }

    handleSubmit = (event) => {
        fetch(this.props.baseURL + "/sessions", {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
        .then (resJson => {
        //   this.props.handleAddAnimal(resJson)
      }).catch (error => console.error({'Error': error}))
    }

    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" onChange={this.handleChange}/>
                <input type="submit" value="Login"/>
                <button onClick={ () => this.closeModal()}>Close</button>
            </form>
        )
    }
}

export default LoginForm