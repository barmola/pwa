import React, { Component } from 'react'
import Styles from "../../../assets/styles/scss/Invitation/InviteBox.module.css"
import {theme,images} from "../../../constants"
import {Select,Input,Button} from "antd"
import InviteRow from "./InviteRow"
import {connect} from "react-redux"
import * as action from "../../../redux/actions/invitation"
class InviteForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             field:[{index:1,email:"",mobile:""}],
             response:null
        }
    }

    handleChange=(e)=>{
        if(['email','mobile'].includes(e.target.name)){
            let field=[...this.state.field]
            field[e.target.dataset.id][e.target.name]=e.target.value;
        }else {
            this.setState({[e.target.name]:e.target.value})
        }
    }

    addNewRow=(e)=>{
        let i=this.state.field.length
        const {field}=this.state
        this.setState((prevState)=>({
            field:[...prevState.field,{index:field[i-1].index+1,email:"",mobile:""}]
        }));
    }


    handleSubmit=(e)=>{
        const {field}=this.state
        const {sendInvitation}=this.props
        console.log("Data:",this.state.field)
        e.preventDefault();
        for(var i=0; i<this.state.field.length; i++){
            if(this.state.field[i].email==='' || this.state.field[i].mobile===''){

            }
        }
        sendInvitation(field)

    }

    clickOnDelete=(record)=>{
        this.setState({
            field:this.state.field.filter(r=> r!==record)
        })

    }



    componentDidUpdate(prevProps,prevState){
            // if(prevProps.inviteData!==this.props.inviteData){
            //     this.setState({response:this.props.inviteData})
            //     console.log("Invitation Data: ",this.state.response)

            // }
    }

    componentDidMount(){
        
    }

    
    render() {
        console.log("Invitation Data: ",this.props.inviteData)
        const {field,response}=this.state
        const {inviteData}=this.props
        return (
            <div className="inviteBox-container">
                <div className="col-md-3 col-sm-6">
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form-container">
                <table className="table" >
                    <tbody>
                    <h2>Invite Your Loved Ones!</h2>
                    {inviteData!=null && inviteData.data.every((item)=>item.is_error==false)?<h4 className="success">Invitation Sent Successfully!</h4>:
                    <h4 className="error"></h4>
                    }
                    <InviteRow field={field} delete={this.clickOnDelete.bind(this)} />
                    <Button type="link" onClick={this.addNewRow} block>Add One More</Button>
                    <Button type="primary" htmlType="submit"  block>Invite</Button>
                    </tbody>
                    <tfoot>
                   

                    </tfoot>
                </table>
                </form>
                </div>

              
            </div>
        )
    }
}



const mapStateToProps=(state)=>{
    return{
        token:state.authReducer.token,
        loading:state.authReducer.loading,
        error:state.authReducer.error,
        inviteData:state.sendInvitationReducer.data

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendInvitation:(data)=>dispatch(action.sendInvitations(data))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(InviteForm)