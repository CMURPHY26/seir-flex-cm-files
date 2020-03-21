
class Div1 extends React.Component {
    render() {
        return (
            <div>
                <Div2 tardis={this.props.tardis} 
        handleCaseToggle={this.props.handleCaseToggle}/>
            </div>
        )
    }
}

class Div2 extends React.Component {
    render() {
        return (
            <div>
            <Div3 tardis={this.props.tardis} 
        handleCaseToggle={this.props.handleCaseToggle}/>
            <Div3 tardis={this.props.tardis} 
        handleCaseToggle={this.props.handleCaseToggle}/>
        </div>
        )
    }
}

class Div3 extends React.Component {
    render() {
        return (
            <div>
                <h3 onClick={ () => this.props.handleCaseToggle(this.props.tardis.name)} > { this.props.tardis.name}</h3>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
          }
    }

    changeIt = (text) => {
        console.log("App - changeIt - name", text);

        if(this.state.tardis.caps) {
            this.setState({
                tardis:{
                name: text.toLowerCase(),
                caps: false
                }
            });
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            });
        }

    }

    render() {
        console.log(this.state);
        return(
        <div>
        <Div1 
        tardis={this.state.tardis} 
        handleCaseToggle={this.changeIt} />
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)