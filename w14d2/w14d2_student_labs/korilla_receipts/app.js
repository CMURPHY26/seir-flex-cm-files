// const receipt1 =
//   {
//     person: 'Karolin',
//     order: {
//       main: 'Burrito',
//       protein: 'Organic Tofu',
//       rice: 'Purple Rice',
//       sauce: 'Green Crack',
//       toppings: [
//         'Baby Bok Choy', 'Cucumber Kimchi'
//       ],
//       drink: 'Korchata',
//       cost: 22
//     },
//     paid: false
//   }
// const receipt2 = {
//   person: 'Jerrica',
//   order: {
//     main: 'Rice Bowl',
//     protein: 'Ginger Soy Chix',
//     rice: 'Sticky Rice',
//     sauce: 'Korilla',
//     toppings: [
//       'Yuzu Pickled Sweet Pepper', 'Kale'
//     ],
//     drink: 'Korchata',
//     cost: 19
//   },
//   paid: false
// }
// const receipt3 = {
//   person: 'Matt',
//   order: {
//     main: 'Salad Bowl',
//     protein: 'Organic Tofu',
//     rice: 'none',
//     sauce: "K'lla",
//     toppings: [
//       'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
//     ],
//     drink: 'Sparkling Blood Orange Soda',
//     cost: 20
//   },
//   paid: true
// }

//Dynamic Rendering
const receipts = [
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
  ];
  

class Receipt extends React.Component {
    render() {
        return (
            <div className="receipt">
                <h1>{this.props.receipt.person}</h1>
                <h3>Order</h3>
                <ul>
                    <li>Main: {this.props.receipt.order.main}</li>
                    <li>Protein: {this.props.receipt.order.protein}</li>
                    <li>Rice: {this.props.receipt.order.rice}</li>
                    <li>Sauce: {this.props.receipt.order.sauce}</li>
                    <li>Drink: {this.props.receipt.order.drink}</li>
                    <li>Cost: $ {this.props.receipt.order.cost}</li>
                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        // receipt1: receipt1,
        // receipt2: receipt2,
        // receipt3: receipt3
        // Dynamic Rendering
        receipts: receipts
    }

    handleReceiptClick = () => {
        console.log("Clicked!");
            this.setState({paid = true});
    }

    render() {
        return (
            <div className="app">
                {this.state.receipts.map(receipt => {
                    return (!receipt.paid ? 
                    (<div onClick={this.handleReceiptClick}>    
                    <Receipt receipt={receipt} paid={receipt.paid}/> 
                    </div>)
                    : null)
                })
                }
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector(".container")
)
