import React, { Component } from 'react'
import Styles from "../../../assets/styles/scss/Invitation/InviteBox.module.css"
import {theme,images} from "../../../constants"
import {Select,Input,Button} from "antd"
import InviteRow from "./InviteRow"
export default class InviteForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             field:[{index:1,Email:"",Mobile:""}]
        }
    }

    handleChange=(e)=>{
        if(['Email','Mobile'].includes(e.target.name)){
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
            field:[...prevState.field,{index:field[i-1].index+1,Email:"",Mobile:""}]
        }));
    }


    handleSubmit=(e)=>{
        console.log("Data:",this.state.field)
        e.preventDefault();
        for(var i=0; i<this.state.field.length; i++){
            if(this.state.field[i].Email==='' || this.state.field[i].Mobile===''){

            }
        }
    }

    clickOnDelete=(record)=>{
        this.setState({
            field:this.state.field.filter(r=> r!==record)
        })

    }

    
    render() {
        const {field}=this.state
        return (
            <div className="inviteBox-container">
                <div className="col-md-3 col-sm-6">
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form-container">
                <table className="table" >
                    <tbody>
                    <h2>Invite Your Loved Ones!</h2>
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
