import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Company from './Company';
import Team from './Team';
class About extends Component {
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
                <h1>About</h1>
                  <div className="row">
                      <div className="col-3">
                          <ul>
                              <li>
                                  <Link to="/about/company">Our Company</Link>
                              </li>
                              <li>
                                  <Link to="/about/team">Our Team</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="col">
                            <Route path="/about/company" component={Company} />
                            <Route path="/about/team" component={Team} />
                      </div>
                  </div>
            </React.Fragment>
         );
    }
}
 
export default About;