import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header,Dashboard,Login,Invitation,_SignUp} from "./Pages"
import {BrowserRouter as Router, Route,Switch,Link,withRoute} from "react-router-dom"
import {connect} from "react-redux"
const token=localStorage.getItem('token')

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  componentDidUpdate(prevProps){
    // if(prevProps.token==null && this.props.token!==null){
    //   this.props.history.push('/invitation')
    // }
  }

  componentDidMount(){
    console.log("token: ",token)
  }




  render(){

  return (
    <div className="App">
      <Router>
      <Header {...this.props} />
      <Switch>
          <Route path="/" exact component={Login} />
         {token!=null?<Route path="/dashboard" exact component={Dashboard} />:<Route/>}
         {token!=null?<Route path="/invitation" exact component={Invitation} />:<Route/>}
          <Route path="/signup" exact component={_SignUp} />
      </Switch>
    </Router>
    </div>
  );
}


}

const mapStateToProps=(state)=>{
  return{
      token:state.authReducer.token,
    
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App)