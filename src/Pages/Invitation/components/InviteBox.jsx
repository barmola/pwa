import React,{Component} from 'react'
import Styles from "../../../assets/styles/scss/Invitation/InviteBox.module.css"
import {theme,images} from "../../../constants"
import {Select,Input,Button} from "antd"
import {useForm,Controller} from "react-hook-form"


const {icons}=images
const {Option}=Select
// const { register,control, handleSubmit, watch, errors } = useForm();

export default class InviteBox extends Component{
constructor(props) {
    super(props)

    this.state = {
         
    }
}

form=()=>{
return(
    <div>
    <div className={Styles.emailContainer}>
        <div className={Styles.email}>
            <img src={icons.at} className={Styles.emailIcon}  />
        </div>
        <div className={Styles.emailField}>
        <Input   placeholder="Email Address"  name="email" style={{width:270}}/>
        </div>
    </div>
    <div className={Styles.mobileContainer}>
        <div className={Styles.email}>
            <img src={icons.smartphone} className={Styles.emailIcon}  />
        </div>
        <Select defaultValue="lucy"  style={{ width: 90,paddingLeft:15 }} disabled className={Styles.select} >
         <Option value="lucy">+91</Option>
            </Select>
        <div>
        <Input   placeholder="Mobile Number"  name="mobile" style={{width:200}}/>
        </div>
    </div>
    <div>

    </div>
    </div>
)
}


render(){

    return (
        
        <div className="inviteBox-container">
            <div className="row">
                <div className="col-md-4">
                <form className={Styles.formContainer} >
        <div className={Styles.mainContainer}>
                {this.form()}
            
           <div>
           <Button type="link" block>Add One More</Button>
           </div>
           <Button type="primary" htmlType="submit"  block>Invite</Button>
        </div>
        </form>
                </div>
            </div>
        </div>
        
    )
}
}

