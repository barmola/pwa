import React from 'react'
import Styles from "../../../assets/styles/scss/Invitation/InviteBox.module.css"
import {theme,images} from "../../../constants"
import {Select,Input,Button} from "antd"
import { FileExcelFilled } from '@ant-design/icons'

const {icons}=images
const {Option}=Select
const InviteRow=(props)=>{
    console.log("Props: ",props)
    return(
        props.field.map((val,idx)=>{
            let email=`Email-${idx}`, mobile=`Mobile-${idx}`
            return(
                <div>
                <tr key={val.idx} >
                    <td className={Styles.noBorder} >
                    <img src={icons.at} className={Styles.emailIcon}  />
                    </td>  
                    <td  className={Styles.noBorder}>
                    <Input   placeholder="Email Address" name="Email" data-id={idx} id={email} name="Email" style={{width:270}}/> 
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
                        <Input   placeholder="Mobile Number"  name="Mobile" data-id={idx} id={mobile}  style={{width:180}}/>
                        </div>
                    </td>
                </tr>
                {props.field[idx].index>1&&
                    <Button type="danger" block onClick={(() => props.delete(val))} >Remove</Button>}
                </div>
            )
        })
    )
}





export default InviteRow