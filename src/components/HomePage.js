import React, {Component} from 'react';
import AdminView from './Admin.js';

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: false,
    productList: [
     {
       productName: 'Hammer',
       description: 'Itsa hammer',
       price: 12.3,
     },
     {
       productName: 'Nail',
       description: 'Itsa nail',
       price: 0.12,
     }
   ]
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  }

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    this.setState({itemCurrentlyOnSale});
  };

  addNewProductToProductList = (newProduct) => {
     const productList = [...this.state.productList];
     productList.push(newProduct);
     this.setState({productList});
  };

  deleteProduct = (index) => {
    const productList = [...this.state.productList];
    productList.splice(index, 1)
    this.setState({productList});
  };

  render () {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
          </span>
          { this.state.editSaleItem ?
            <div>
              <input
                value={this.state.itemCurrentlyOnSale}
                onChange={this.handleItemCurrentlyOnSaleChange}
                type='text'
               />
            </div>
          : null }
          <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            deleteProduct={this.deleteProduct}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
