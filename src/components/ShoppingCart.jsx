import React, { Component } from 'react';
import Product from './Product';
class ShoppingCart extends Component {
  
    render() { 
        return (
             <React.Fragment>
                   <h1>ShoppingCart</h1>
                   <button onClick={this.props.onReset} className="btn btn-dark">
                       Reset
                   </button>
                     {this.props.products.map(product=>
                         <Product 
                         onIncrement={this.props.onIncrement}
                         onDelete={this.props.onDelete}
                         key={product.id} product={product}>
                            <span>{product.id}</span> 
                         </Product>
                     )}
             </React.Fragment>
             
             );
    }
}
 
export default ShoppingCart;