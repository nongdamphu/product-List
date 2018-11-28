import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routers from './routers'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    {this.showNav(routers)}
                </div>
            </Router>
        );
    }

    showNav =(routers) =>{
        let result = null
        if(routers.length> 0){
            result = routers.map((route, index) =>{
                return  <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                        
            })
            
        }
        return <Switch>{result}</Switch>
    }
}

export default App;