import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header,Dashboard,Login,Invitation,_SignUp} from "./Pages"
import {BrowserRouter as Router, Route,Switch,Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  





  render(){

  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/invitation" exact component={Invitation} />
          <Route path="/signup" exact component={_SignUp} />
      </Switch>
    </Router>
    </div>
  );
}


}

export default App;
