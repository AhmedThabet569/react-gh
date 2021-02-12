import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Product extends Component {
    // state = {  
    //     name:product.name,
    //     count:product.count,
       
    //     hoppies : []
    // };
    getClasss()
    {
     return    this.props.product.count === 0 ? "badge badge-warning m-3" : "badge badge-primary m-3";
    }
  
    // 1-first soul to pass argurmnt but not easy
    // 2-best is to use bind
    // 3-using arrow function in ex
    // icrease = () =>
    // {
    //     this.increaseCount(2)
    // }
    render() { 
        const {onIncrement,onDelete,product}  = this.props;
        return (
            
        <div className="row">
            <div className="col-1"><span>
                <Link to={`/product/${product.id}`}>{product.name}</Link></span></div>
            <div className="col">
              
              <span className={this.getClasss()}>{product.count} </span>    
              {/* <button onClick={this.increaseCount.bind(this,2)} className="btn btn-primary btn-sm">+</button> */}
              <button onClick={()=>{
                  onIncrement(product);
              }} className="btn btn-primary btn-sm mr-3">+</button>
            <span onClick={()=>onDelete(product)}>  <i style={{cursor:'pointer'}}  className="fas fa-trash m-2"></i>
            </span>
           </div>
            {/* {product.hoppies.length ===0 && <h3>No hoppies</h3>} 
              <ul>
                  {product.hoppies.map(hoppy=><li key={hoppy}>{hoppy}</li>)}
                 
              </ul>        */}
        </div>);
    }
}
 
export default Product;