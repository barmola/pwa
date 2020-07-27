import React,{useEffect} from 'react'
import {Navbar,NavbarBrand,Nav,NavDropdown} from "react-bootstrap"
import Styles from "../../assets/styles/scss/Header/Header.module.css"
import {Button} from "antd"
import {ShareAltOutlined} from "@ant-design/icons"
import {images,theme} from "../../constants"
import {Link,Redirect} from "react-router-dom"
import {BrowserRouter} from "react-router"
import {connect} from "react-redux"
const {logo}=images
let token=localStorage.getItem('token')
class Header extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             localToken:localStorage.getItem('token')
        }
    }
    

    signout=()=>{
        localStorage.removeItem('token')
        console.log("Signed Out")

        return <Redirect to="" />
    }

    componentDidUpdate(prevProps,prevState){
        token=localStorage.getItem('token')
        if(token!=null){
            // this.props.history.push('/invitation')
        }
    }

    async componentDidMount(){
        console.log("THIS PROPS: ",this.props.history)
        console.log("THIS token: ",this.state.localToken)
        token=await localStorage.getItem('token')
    }

    // const{token,isAuthenticated}=props
    // const localToken=localStorage.getItem('token')


  render(){
const {isAuthenticated}=this.props
const {localToken}=this.state  
console.log("Header Token: ",token)
    return (
            <div>
                <Navbar bg="light">
             <Navbar.Brand href="#home" className="header">
                 <img src={logo.logo} className={Styles.logo}/>
                 <div style={{flexDirection:"row",alignItems: "center",display:"flex",justifyContent:"center"}}>
                {token!=null&& <Link to="/invitation">
                 <Button shape="round" type="primary" icon={<ShareAltOutlined className={Styles.icon} />} size="large">Invite Someone</Button>
                 </Link>}
                {token!=null&& <Link>
                <h4 onClick={this.signout}>SignOut</h4 >
                </Link>}

                 </div>
                 

             </Navbar.Brand>
             <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
             </Navbar>

            </div>
           
    )
}

}
const mapStateToProps=(state)=>{
    return{
        token:state.authReducer.token,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
            // login:(email,password)=>dispatch(action.authStart(email,password))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header)