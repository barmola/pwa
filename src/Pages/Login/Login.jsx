import React,{useEffect} from 'react'
import Styles from "../../assets/styles/scss/Login/Login.module.css"
import {Row,Col,Form} from 'react-bootstrap'
import {Button,Input,Form as Forms} from "antd"
import {Link} from "react-router-dom"
import {images} from "../../constants"
import {useForm,Controller} from "react-hook-form"
import * as action from "../../redux/actions/auth"
import {connect} from "react-redux"
import { Spin } from 'antd';
import {LoadingOutlined} from "@ant-design/icons"
const {logo,photos}=images

function Login(props) {
const {loading,error}=props
const {handleSubmit,register,control}=useForm()
const onSubmit = data =>{
    console.log("Login Data: ",data)
    props.login(data.email,data.password)
};



const LoadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


useEffect(()=>{
    console.log("Props Token: ",props.token)
    if(props.token!=null){
        props.history.push('/invitation')
    }
},[props.token])

    return (
        <div>
            <div className="login-Container">
                <div className="row">
                    <div className="col-md-7">
                        <div>
                        <img src={photos.banner} className="login-banner" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-Container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2>Log In</h2>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Controller as={Input} control={control}
                                name="email" 
                                placeholder="Enter your Email" size="large"   />
                                </Form.Group>
                                {error!=null&&<h6>{error}</h6>}
                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                 <Controller as={Input}
                                 name="password"
                                 control={control} type="password" placeholder="Password" size="large" />
                                </Form.Group>
                                <h6>{error!=null?error.detail:""}</h6>
                                <Button htmlType="submit" type="primary" loading={loading} block size="large">Log In</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




const mapStateToProps=(state)=>{
    return{
        token:state.authReducer.token,
        loading:state.authReducer.loading,
        error:state.authReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        login:(email,password)=>dispatch(action.authentication(email,password))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login)