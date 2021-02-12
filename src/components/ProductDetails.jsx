import React, { Component } from 'react';
import qs from 'query-string';
class ProductDetails extends Component {
    handelEdit = ()=>  //when save date in page redirect to parent page and cannot return to same page
    {
        console.log("edit");
        // 1-push ,2-replace => can't return to same page 
        // this.props.history.push('/cart');
        this.props.history.replace('/cart');
    }
    render() { 
        console.log(qs.parse(this.props.location.search));
    
    //  get product  from product id
    const product= this.props.products.filter(c => c.id === parseInt(this.props.match.params.id))[0];
    // فكرة الكود انك جبت المنتج من خلال انك عملت فلتر للداتا اللي في المنتجات وشوفت لو فعلا رقم المنتج يساوي الرقم اللي مبعوت في اللينك 

    return ( 
        <React.Fragment>
            <h2>Details No.{this.props.match.params.id}</h2>
            <h2>{product.name}</h2>
            <h2>the count of product is {product.count}</h2>
            <button onClick={this.handelEdit} className="btn btn-primary">Save</button>
        </React.Fragment>
     );
    }
}
 
export default ProductDetails;

