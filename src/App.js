import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const pages = 'http://localhost:3000/pages'

export default class App extends React.Component {

  state = {
    pages : [],
  }

  componentDidMount() {
    fetch(pages)
    .then(res => res.json())
    .then(pages => this.setState({
       pages : pages
    }))
  }

render () {
return (
  <div className="App">
      <header className="App-header">
        <p>
            New Beginings
            {console.log(this.state)}
        </p>
        <h1 className='content'> {this.state.pages.content}</h1>
        <h1> {this.state.pages.path_id} </h1>
      </header>
    </div>
);
}
  

}


