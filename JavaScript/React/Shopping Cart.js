import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  render() {
    if (ShoppingCart.soldOut === true) {
      return <h2>Sold out!</h2>;
    } else {
        return (
            <ShoppingCart item="Banana" quantity={9} price={.99} soldOut={false}  />
        );
    }
  }
}

export class ShoppingCart extends React.Component {
  render() {

    if (this.props.soldOut === true) {
      return <h2>Sold out!</h2>;
    } else {
      return <ul>
        <li>Item: {this.props.item}</li>
        <li>Quantity: {this.props.quantity}</li>
        <li>Price: {this.props.price}</li>
        </ul>;
    }
  }
}
