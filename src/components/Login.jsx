import React, { Component } from 'react';
import Joi, { errors } from 'joi-browser';
class Login extends Component {
    state = { 
        username:'',
        password:'',
        errors:{}
     }
    //  create schema for valiotion
    schema = {
        username:Joi.string().required(),
        password:Joi.string().required()
    }
    // using refs only in small app not prefred way
    // username = React.createRef();
    handelSubmit=(e)=>
    {
        // const username = this.username.current.value;
        e.preventDefault();
       const errors =  this.handleErrors();
       if(errors) return;
       console.log('submitted');
        // access from data using refs
        // console.log(username);
    }
    handleChange = (e)=>
    {
        // clone state 
        let state = {...this.state};
        //edit 
        // access every name to change it isted of value 
        state[e.currentTarget.name] = e.currentTarget.value;
        // set state 
        this.setState(state);
    }

    handleErrors = () => 
    {
        const errors = {};
        const state = {...this.state};
        delete state.errors;
        const res = Joi.validate(state,this.schema,{abortEarly:false});
        console.log(res);
        if(res.error === null) 
        {
            this.setState({errors:{}})
            return null;
        }
     for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;

    }
    render() { 
        return ( 
            <React.Fragment>
                <h2>Login</h2>
                <form onSubmit={this.handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.username}  type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" onChange={this.handleChange}/>
                        {this.state.errors.username &&(<div className="alert alert-danger">
                               {this.state.errors.username}
                            </div>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.password} type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={this.handleChange}/>
                    {this.state.errors.password &&<div className="alert alert-danger">
                               {this.state.errors.password}
                            </div>}
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;