import React from 'react'
import Styles from "../../../assets/styles/scss/Invitation/InviteBox.module.css"
import {theme,images} from "../../../constants"
import {Select,Input,Button} from "antd"
import { FileExcelFilled } from '@ant-design/icons'
import {connect} from "react-redux"
const {icons}=images
const {Option}=Select
const InviteRow=(props)=>{




    console.log("Props: ",props)
    return(
        props.field.map((val,idx)=>{
            let email=`email-${idx}`, mobile=`mobile-${idx}`
            // let resId=props.inviteData.data[idx]
            console.log("Form Email: ",email)
            console.log("Form Mobile: ",mobile)
            return(
                <div>
                <tr key={val.idx} >
                    <td className={Styles.noBorder} >
                    <img src={icons.at} className={Styles.emailIcon}  />
                    </td>  
                    <td  className={Styles.noBorder}>
                    <Input   placeholder="Email Address" name="email" data-id={idx} id={email}  style={{width:270}}/> 
                   {props.inviteData!=null&& <h6 id={`email-${props.inviteData.data[idx].index}`}data-id={idx} >{props.inviteData.data[idx].is_error?props.inviteData.data[idx].error:""} </h6>}
                    </td >
                </tr>
                <tr>
                    <td  className={Styles.noBorder}>
                    <img src={icons.smartphone} className={Styles.emailIcon}  />
                    </td>
                    <td  className={Styles.noBorder}>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Select defaultValue="lucy"  style={{ width: 90 }} disabled className={Styles.select} >
                          <Option value="lucy">+91</Option>
                        </Select>
                        <Input   placeholder="Mobile Number"  name="mobile" data-id={idx} id={mobile}  style={{width:180}}/>
                        </div>
                    </td>
                </tr>
                {props.field[idx].index>1&&
                    <Button type="danger"
                    
                    block onClick={(() => props.delete(val))} >Remove</Button>}
                </div>
            )
        })
    )
}





const mapStateToProps=(state)=>{
    return{

        inviteData:state.sendInvitationReducer.data

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(InviteRow)