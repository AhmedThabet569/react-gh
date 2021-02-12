import React, { Component } from 'react'
import axios from 'axios';
class ProductForm extends Component {
    state = {
        id:"", 
        name:"",
        price:""
     }
   async  componentDidMount()
     {
        //  get id from url 
        const id = this.props.match.params.id;
        if(id !=="new")
        {
           const {data}  =  await axios.get("http://localhost:3000/products/"+id);
           console.log(data);
        // //    /clone state 
        const state = {...this.state};
        // // edit state 
        state.name = data.name;
        state.price = data.price;
        state.id = data.id;
        // // set state
        this.setState(state);

        }
        // console.log(id);
     }
     handelSubmit = async(e)=>
     {
       
         e.preventDefault();
        //  console.log('submitte');
        // this function used in two way to add or update so you must define what action before call
        if(this.props.match.params.id === "new")
        {
            const data = {...this.state,count:0,isInCart:false}
            await axios.post("http://localhost:3000/products",data);
        }else
        {
        //    update
          const obj = {...this.state,count:0,isInCart:false};
          delete obj.id;
          await axios.put("http://localhost:3000/products/"+this.state.id,obj);
        }
  
       this.props.history.replace('/admin');
     }
     handleCahnge = (e)=>
     {
        //  clone 
         let state = {...this.state};
        // edit
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);

     }
    render() { 
        return (<React.Fragment>
            <h1>{this.props.match.params.id === "new" ? "Add" : "Update"} Product</h1>
            <form onSubmit={this.handelSubmit}>
                 <div className="form-gorup">
                     <label htmlFor="name">Name</label>
                         <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleCahnge}/>
                    
                 </div>
                  <div className="form-gorup">
                     <label htmlFor="price">Price</label>
                         <input type="text" className="form-control" name="price" id="price" value={this.state.price} onChange={this.handleCahnge}/>
                     
                 </div>
                 <br/>
                 <button type="submit" className="btn btn-primary">
                     {this.props.match.params.id === "new" ? "Add" : "Update"} Product</button>
            </form>

        </React.Fragment>  );
    }
}
 
export default ProductForm;