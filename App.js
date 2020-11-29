import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
// import Todos from "./components/Todos";
// import AddTodo from "./components/AddTodo";
// import { v4 as uuid } from "uuid" 

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
          {/* <Route path='/Posts' component={Posts} /> */}
        </Router>
      </div>
    )
  }
}

export default App ;