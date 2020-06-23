import React from 'react'
import {Navbar,NavbarBrand,Nav} from "react-bootstrap"
import Styles from "../../assets/styles/scss/Header/Header.module.css"
import {Button} from "antd"
import {ShareAltOutlined} from "@ant-design/icons"
import {images,theme} from "../../constants"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

const {logo}=images
function Header(props) {
    const{token,isAuthenticated}=props

    return (
            <div>
                <Navbar bg="light">
             <Navbar.Brand href="#home" className="header">
                 <img src={logo.logo} className={Styles.logo}/>
                 <div style={{flexDirection:"row",alignItems: "center"}}>
                {isAuthenticated&& <Link to="/invitation">
                 <Button shape="round" type="primary" icon={<ShareAltOutlined className={Styles.icon} />} size="large">Invite Someone</Button>
                 </Link>}



                 </div>
                 

             </Navbar.Brand>
             </Navbar>

            </div>
           
    )
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