import React from "react";
import './App.css';
import{ Navbar} from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import {Default} from "./components/Default";
import { BrowserRouter as Router ,Switch, Route}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App () {
    return (
        <Router>
            <div className="main-container">
                <div className="main-container-border">
                    <div className="main-container-border-header">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/catalog" component={Catalog}/>
                            <Route path="/about" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route component={Default} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );

}
