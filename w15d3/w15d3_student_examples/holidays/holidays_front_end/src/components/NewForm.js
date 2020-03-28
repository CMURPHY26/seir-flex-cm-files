import React from 'react';

class newForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            //Object shorthand turns event.target.id into the key 
            [event.target.id]: event.target.value
            // the above translates into the below
            // name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //Send the data to the server
        fetch(this.props.baseURL + '/holidays', {
            method: 'POST',
            body: JSON.stringify({name: this.state.name}),
            headers: {
                'Content-Type': 'application/json'
            }
            //server responds with JSON
        }).then( res => res.json())
        .then(resJson => {
            //Lift state to APP
            //add the received data to state in App
            this.props.handleAddHoliday(resJson)
            //reset state because event.preventDefault prevents the reset
            this.setState({name: '' })
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a holiday"/>
                <input type="submit" value="Add a Reason to Celebrate"/>
            </form>
        )

    }
}


export default newForm;