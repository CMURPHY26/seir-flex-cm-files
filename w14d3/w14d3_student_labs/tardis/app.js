
class Div3 extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
          }
    }

    changeIt = (text) => {
        console.log("Div 3 - changeIt - name", text);

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
        return (
            <div>
                <h3 onClick={() => {this.changeIt(this.state.tardis.name)}}> { this.state.tardis.name}</h3>
            </div>
        )
    }
}

class Div2 extends React.Component {
    render() {
        return (
            <div>
            <Div3 />
            <Div3 />
        </div>
        )
    }
}


class Div1 extends React.Component {
    render() {
        return (
            <div>
                <Div2 />
            </div>
        )
    }
}


class App extends React.Component {

    render() {
        return(
        <div>
        <Div1 />
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)