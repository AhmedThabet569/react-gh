import React, { Component } from 'react';
import Navbar from './Navbar';

import ShoppingCart from './ShoppingCart';
import { Route,Switch,Redirect } from "react-router-dom";
import axios from 'axios';
import Home from './Home';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import Menu from './Menu';
import Login from './Login';
import Admin from './Admin';
import ProductForm from './ProductFrom';
class App extends Component {
   state = { 
        products:[]
     }
    async componentDidMount(){
        // call backend
         const {data}= await axios.get("http://localhost:3000/products");
        //  set state
        this.setState({products:data})
         console.log(data);
     }
     handelDelete =async (product)=>{
        //  if the data from server is not returned yet but ui is delete it how to solve it 
        // clone products 
        const oldProducts  =  [...this.state.products];
        //  console.log(product);
        //  every hangdle event 
        // clone state
        // edit state 
        // set state
        
         const newProducts = this.state.products.filter(p=> p.id !== product.id);
         this.setState({products:newProducts});
         try {
             await axios.delete("http://localhost:3000/products/"+product.id);
         } catch (ex) {
             alert("cannot deleted");
             this.setState({products:oldProducts});
             
         }

     }
     handleReset =()=>
     {
        //  console.log("reset")
        let Proudcts = [...this.state.products];
          Proudcts.map((p)=>{
             p.count = 0;
             return p;
        });
        this.setState({Proudcts})
     }
       increaseCount = (product)=>
    {
        // clone from products
        const Products = [...this.state.products];
        const Index = Products.indexOf(product);//get index of product
        // clone of object of  product to can easy access to props.count
        Products[Index] = {...Products[Index]};
        console.log(Products[Index]);
        // edit increse count 
         Products[Index].count++;
        //  set state 
        this.setState({products:Products})
    }
    handelOnClickCart = (product)=>
    { 
        const Products = [...this.state.products];
        const Index = Products.indexOf(product);
        Products[Index] = {...Products[Index]};
         Products[Index].isInCart = !Products[Index].isInCart;
        this.setState({products:Products}) 

    }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar productsCount= {this.state.products.filter(p => p.count > 0).length}/>
                <main className="container">
                    <Switch>
                 
                       <Route path="/cart" render={(props)=><ShoppingCart products={this.state.products}
                       onIncrement={this.increaseCount}
                       onDelete={this.handelDelete}
                       onReset = {this.handleReset}
                       {...props}
                    />}/>
                    <Route path="/product/:id" render={(props)=><ProductDetails products={this.state.products} {...props}/>}/>
                    <Route path="/menu" 
                      render={(props)=><Menu  products={this.state.products} onClick={this.handelOnClickCart} {...props}/>}/>
                     <Route path="/login" component={Login}/>
                     <Route path="/addproduct/:id" component={ProductForm}/>
                     <Route path="/admin" render={props=>(
                         <Admin
                            {...props}
                            products={this.state.products}
                            onDelete = {this.handelDelete}

                         />
                     )}/>
                    

                    <Route path="/home" exact component={Home}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Redirect from="/" to="/home"/>
                    <Redirect to="/not-found"/>

                    </Switch>

                    {/* <ShoppingCart products={this.state.products}
                       onIncrement={this.increaseCount}
                       onDelete={this.handelDelete}
                       onReset = {this.handleReset}
                    /> */}
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;