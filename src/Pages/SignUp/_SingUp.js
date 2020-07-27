import React,{useState} from 'react'
import Styles from "../../assets/styles/scss/SignUp/SignUp.module.css"
import {Button,Input,DatePicker,Popover,Form} from "antd"
import {Link} from "react-router-dom"
import {images} from "../../constants"
import {connect} from "react-redux"
import * as action from "../../redux/actions/registration"
const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex=/^\s*([0-9a-zA-Z]+)\s*$/;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const {logo,photos}=images
class  _SingUp extends React.Component {
constructor(props) {
    super(props)

    this.state = {
         firstName:"",
         lastName:"",
         email:"",
         phone:"",
         username:"",
         password:"",
         confirmPassword:"",
         date:null,
         disable:true,
         key:null,
         err:{email:"",password:"",mobile:""}
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}

getReferalKey=(url)=>{
    var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
    }
    localStorage.setItem('refKey',params.data)
    this.setState({key:params.key})
    
}





 onChange=(date, dateString)=>{
    console.log("Date:",dateString);
    this.setState({date:dateString})
  }

// handleSubmit=(event)=>{
//     event.preventDefault();
//     const {email,username,firstName,lastName,password,phone,date,key}=this.state 
//     this.props.signup(firstName,lastName,username,phone,email,password,date,key)

// }


handleChange=(event)=> {
    const {email,username,firstName,lastName,password,confirmPassword,phone}=this.state 
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value})
    // if(event.target.name==='email'){
        if(emailRegex.test(email)&&username!=""&&!passwordRegex.test(password)&&firstName!=""&&lastName!=""&&confirmPassword===password)
        {this.setState({disable:false})}
        else this.setState({disable:true})
    // }
}

formVailidate=(name,value)=>{
    const {err,password}=this.state
    let formError=err;
    switch(name){
        case 'email':
            let emailVaild=emailRegex.test(value)
            formError.email=emailVaild?"":"Please enter vailid Email."
            break;
        case 'password':
            let passwordVailid=passwordRegex.test(value)
            formError.password=passwordVailid?"Password should be Alphanumeric":""
            break;

        case 'confirmPassword':
            let confirm=password===value? true:false;
            formError.password=confirm?"":"Confirm Password doesn't match."
            break;

        case 'phone':
            let mobile=value.length===10?true:false;
            formError.mobile=mobile?"":"Please enter vailid Indian mobile number."
            break;

            default:
                break;
    }
    this.setState({err:formError})
}

componentDidUpdate(){
    const key=localStorage.getItem('refKey')
    if(key==null){
        this.getReferalKey(window.location.href)
    }
}

componentDidMount(){

    this.getReferalKey(window.location.href)

}

onFinish = values => {
    console.log('Success:', values);

    this.props.signup(values.firstName,values.lastName,values.password,values.username,values.email,values.phone,this.state.date)
  };


render(){
const {email,username,firstName,lastName,password,confirmPassword,phone,disable}=this.state
// console.log("Signup Data Response: ",this.props.data)
// console.log("Password Regx: ",phone.length)
    return (
        <div className={Styles.mainContainer}>
            <div className="row ">
                <div className="col-md-7">
                    <img src={photos.banner} className={Styles.banner} />
                </div>
                <div className="col-md-5">
                    <div className={Styles.formContainer}>
                        <form className={Styles.formBox}>
                        <Form
                         onFinish={this.onFinish}>
                            <p className={Styles.loginText}>Sign Up</p>
                            <div className="row mt-3">
                                <div className="col-md-6 pt-2">
                                    <Form.Item name="firstName" 
                                rules={[{required:true,message:"Please Enter your First Name."}]}>
                                    <Input  name="firstName" 
                                    placeholder="First Name" size="large" 
                                    onChange={this.handleChange}
                                    value={firstName}
                                    />
                                    </Form.Item>
                                </div>
                                <div className="col-md-6 pt-2">
                                <Form.Item name="lastName" 
                                rules={[{required:true,message:"Please Enter your First Name."}]}>                                    
                                    <Input  name="lastName" 
                                    value={lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"  size="large" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Form.Item name="username" 
                                rules={[{required:true,message:"Please Enter your Last Name."}]}>                                      
                                <Input  name="username" 
                                value={username}
                                onChange={this.handleChange}
                                placeholder="Username" size="large" />
                                </Form.Item>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Form.Item
                                name="email"
                                rules={[{required:true,
                                message:"Please enter vailid email",pattern:emailRegex}]}>
                                <Input  name="email" 
                                 type="email"
                                 value={email}
                                //  onChange={this.handleChange}

                                placeholder="Email" size="large" />
                                </Form.Item>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6 pt-2">
                                <Form.Item name="phone" 
                                rules={[{required:true,message:"Please Enter Vailid Indian Mobile Number.",len:10}]}>       
                                <Input  name="phone" 
                                value={phone}
                                onChange={this.handleChange}

                                placeholder="Mobile Number" size="large" />
                                </Form.Item>
                                </div>
                                <div className="col-md-6 pt-2">
                                <Form.Item name="date" 
                                rules={[{required:true,message:"Please Enter Your Date of Birth."}]}> 
                                <DatePicker placeholder="Date of Birth" style={{width:"100%"}} onChange={this.onChange} size="large" />
                                </Form.Item>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Form.Item name="password" 
                                rules={[{required:true,message:"Please Enter Alphanumeric Password.",pattern:/^[ A-Za-z0-9_@./#&+-]*$/}]}>  
                                <Input.Password name="password" 
                                value={password}
                                onChange={this.handleChange}
                                type="password"
                               placeholder="Password" size="large" />
                               </Form.Item>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Form.Item name="confirmPassword" 
                                rules={[{required:true,message:"Confirm Password not same."}]}> 
                                <Input.Password  name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                type="password"

                               placeholder="Confirm Password"  size="large" />
                               </Form.Item>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                <Button type="primary"  
                                // disabled={disable==false && phone.length===10?false:true}
                                htmlType="submit"
                                block size="large" >Sign Up</Button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <Link to="/">
                                <Button type="ghost"  
                                // disabled={disable==false && phone.length===10?false:true}
                                htmlType="submit"
                                block size="large" >Already have an account? Log In</Button>
                                </Link>
                                </div>
                            </div>
                        </Form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
}


const mapStateToProps=(state)=>{
    return{
        data:state.registrationReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signup:(firstName,lastName,username,phone,email,password,date,key)=>dispatch(action.signup(firstName,lastName,username,phone,email,password,date,key))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(_SingUp)