import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
      </div>
    );
  }
}

export default Main ;