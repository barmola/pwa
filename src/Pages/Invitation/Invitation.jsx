import React from 'react'
import Styles from "../../assets/styles/scss/Invitation/Invitation.module.css"
import InviteBox from "./components/InviteBox"
import InviteForm from "./components/InviteForm"
export default function Invitation() {
    return (
        <div className="Invitation-container">
         <InviteForm/>
        </div>
    )
}
