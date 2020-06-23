import React,{useState} from 'react'
import Styles from "../../assets/styles/scss/SignUp/SignUp.module.css"
import {Button,Input} from "antd"
import {Link} from "react-router-dom"
import {images} from "../../constants"
import {useForm,Controller} from "react-hook-form"

const {logo,photos}=images
export default function _SingUp() {
const {watch,register,handleSubmit,control,errors}=useForm()
const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const onSubmit = data => console.log(data);




    return (
        <div className={Styles.mainContainer}>
            <div className="row ">
                <div className="col-md-7">
                    <img src={photos.banner} className={Styles.banner} />
                </div>
                <div className="col-md-5">
                    <div className={Styles.formContainer}>
                        <form className={Styles.formBox} onSubmit={handleSubmit(onSubmit)}>
                            <p className={Styles.loginText}>Sign Up</p>
                            <div className="row mt-3">
                                <div className="col-md-6 pt-2">
                                    <Controller as={Input} name="firstName" control={control}  placeholder="First Name" size="large" />
                                </div>
                                <div className="col-md-6 pt-2">
                                    <Controller as={Input} name="lastName" control={control}  placeholder="Last Name"  size="large" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Controller as={Input} name="email"  control={control}
                                ref={register({pattern:/^[A-Za-z]+$/i,minLength:8})}
                                placeholder="Email" size="large" />
                                    {errors.email&&"Please enter vailid email address."}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Controller as={Input} name="mobile" control={control}  placeholder="Mobile Number" size="large" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Controller as={Input} name="password" control={control}  placeholder="Password" size="large" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                <Controller as={Input} name="confirmPassword" control={control} placeholder="Confirm Password"  size="large" />
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                <Button type="primary" htmlType="submit" block size="large" >Sign Up</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
