import React from 'react'


class RegisterForm extends React.Component {
    state = {
        username: null,
        password: null
    }

    closeModal = () => {
        document.querySelector('.RegModal').style.display = 'none'
    }

    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value});
    }

    handleSubmit = (event) => {
        fetch(this.props.baseURL + "/users", {
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
          this.setState({
            username: null,
            password: null
          })
      }).catch (error => console.error({'Error': error}))
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" onChange={this.handleChange}/>
                <input type="submit" value="Register"/>
                <button onClick={ () => this.closeModal()}>Close</button>
            </form>
        )
    }
}

export default RegisterForm