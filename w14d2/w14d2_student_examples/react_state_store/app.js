
console.log(products);

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi there!</h1>
                {products.map( (product) => {
                    return(
                    <div>
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <h4>{product.description}</h4>
                    </div>
                    )
                }
                )}
            </div>
        )
    }
}





ReactDOM.render(
    <App />,
    document.querySelector(".container")
);