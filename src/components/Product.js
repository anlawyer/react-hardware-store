import React, {Component} from 'react';

class Product extends Component {
  render () {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        <button onClick={() => this.props.deleteProduct(productName, this.props.index)}>Delete</button>
      </div>
    );
  }
}

export default Product;
