
import './App.css';
import React, { Component } from 'react';
import  News from './components/News.js'
import Navbar from  './components/Navbar.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  pagesize=6
  apikey=process.env.react_app_news_api
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({ progress : progress});
  }
  render() {
    return (
      <Router>
        <div>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />                                                                                       
        <Navbar/>
       </div>
        <Routes>
          <Route exact path="/" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route>
          <Route exact path="/home" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={ < News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={6} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
      
    )  }
}
