import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Main from './Pages/Main/';
// import Login from './Pages/Login/';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} />
          //=> Main컴포넌트와 연결
          <Route exact path="/login" component={Login} />
          //=> Login컴포넌트와 연결 */}
        </Switch>
      </Router>
    );
  }
}
