import './App.css';
import NavBar from './compoents/navbar';
import React, { Component } from 'react'
import Footer from './compoents/footer';
import News from './compoents/news';
import Form from './compoents/form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <div class="d-flex flex-column min-vh-100">
    <main class="flex-fill mb-5">
        <Switch>
          <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
          <Route exact path='/form'><Form/></Route>
        </Switch></main></div>
        <Footer/>
        </Router>
      </div>
    )
  }
}