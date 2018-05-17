import React, {Component} from 'react';

import Product from './Product';

class ProductList extends Component {
  render () {
    const productList = this.props.productList;

    console.log(productList);

    const productComponents = productList.map((product, index) => {
      return (
        <Product
          productName={product.productName}
          description={product.description}
          price={product.price}
          deleteProduct={this.props.deleteProduct}
          key={index}
          index={index} />
      );
    });

    return (
      <div>
        { productComponents }
      </div>
    );
  }
}

export default ProductList;
