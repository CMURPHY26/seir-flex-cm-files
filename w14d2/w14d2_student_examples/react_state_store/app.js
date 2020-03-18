
console.log(products);


class Greeter extends React.Component {
    render() {
        return (
            <h1>Hi there {this.props.name}!</h1>
        )
    }

}


class App extends React.Component {
    //OLD Syntax but need to manage legacy code
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: products,
    //         name: "Ira"
    //     };
    // }


    //New Method much easier
    state = {
        products: products,
        name: "Ira"
    }

    render() {
        return (
            <div>
                <Greeter name={this.state.name}/>
                <ul>
                {this.state.products.map( (product) => {
                    return(
                    <li>
                        {product.name} {product.price}
                    </li>
                    )
                }
                )}
                </ul>
            </div>
        )
    }
}





ReactDOM.render(
    <App />,
    document.querySelector(".container")
);