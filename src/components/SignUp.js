import React from 'react'
import { useState } from "react";
import { withRouter } from 'react-router-dom'
import './style.css';

function SignUp(props) {

    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }


       let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }


    let saveData=()=>{
        //validation
        validateEmail();
        validatefirstName();
        validatelastName();
        validatepassword();
        validateconfirmPassword();
        if(validateEmail()  && validatefirstName() && validatelastName() && validatepassword() && validateconfirmPassword()){
        props.getUserData(userData);
        setuserData({
            email:'',
            firstName:'',
            lastName:'',
            password:'',
            confirmPassword:'',
        });
    }
};

       const [userData, setuserData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        password:'',
        confirmPassword: '',
    })

    const [emailError, setemailError] = useState("");


    const validateEmail = ()=>
    {
        if(userData.email){
            let regex = /^\S+@\S+$/;
            if(regex.test(userData.email)){
                setemailError("");
                return true;
            } else {
                setemailError("enter valid email id");
            }}
            else{
                setemailError("email id is required");
            }
        return false
    };

    const [firstNameError, setfirstNameError] = useState("");


    const validatefirstName = ()=>
    {
        if(userData.firstName){
            let regex = /^[a-zA-Z ]+$/;
            if(regex.test(userData.firstName)){
                setfirstNameError("");
                return true;
            } else {
                setfirstNameError("enter valid First Name");
            }}
            else{
                setfirstNameError("First Name is required");
            }
        return false
    };

    const [lastNameError, setlastNameError] = useState("");


    const validatelastName = ()=>
    {
        if(userData.lastName){
            let regex = /^[a-zA-Z ]+$/;
            if(regex.test(userData.lastName)){
                setlastNameError("");
                return true;
            } else {
                setlastNameError("enter valid Last Name");
            }}
            else{
                setlastNameError("Last Name is required");
            }
        return false
    };

    
    const [passwordError, setpasswordError] = useState("");


    const validatepassword = ()=>
    {
        if(userData.password){
            let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(regex.test(userData.password)){
                setpasswordError("");
                return true;
            } else {
                setpasswordError("enter valid password");
            }}
            else{
                setpasswordError("Password is required");
            }
        return false
    };

    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    // let validateconfirmPassword=()=>{
    //     if (SignUp.confirmPassword){
    //         if(SignUp.confirmPassword===SignUp.password){
    //             setconfirmPasswordError("");
    //             return true
    //         }else{
    //             setconfirmPasswordError("password and confirm password doesnt match")
    //             return false
    //         }
    //     }else{
    //         setconfirmPasswordError("confirm password")
    //     }
    // }

    const validateconfirmPassword = ()=>
    {
        if(userData.confirmPassword){
            let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(regex.test(userData.confirmPassword)){
                setconfirmPasswordError("");
                return true;
            } else {
                setconfirmPasswordError("confirm password");
            }}
            else{
                setconfirmPasswordError("confirmation is required");
            }
        return false
    };
    
    return (
        <div>
            <h1>i m Signup</h1>
            

            <div className='mb-3'>
                    <input name='email' type="email" className="form-control" placeholder="Enter Email" 
                    value={userData.email} onChange={(event)=>{updateUserData(event)}}/>
                {emailError && <div className="errorMsg">{emailError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='firstName' type="text" className="form-control" placeholder="Enter First name" 
                    value={userData.firstName} onChange={(event)=>{updateUserData(event)}}/>
                {firstNameError && <div className="errorMsg">{firstNameError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='lastName' type="text" className="form-control" placeholder="Enter Last name" 
                    value={userData.lastName} onChange={(event)=>{updateUserData(event)}}/>
                {lastNameError && <div className="errorMsg">{lastNameError}</div>}
                </div>
            
                
                <div className='mb-3'>
                    <input name='password' type="password" className="form-control" placeholder="Enter Password" 
                    value={userData.password} onChange={(event)=>{updateUserData(event)}}/>
                {passwordError && <div className="errorMsg">{passwordError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='confirmPassword' type="password" className="form-control" placeholder="Confirm Password" 
                    value={userData.confirmPassword} onChange={(event)=>{updateUserData(event)}}/>
                {confirmPasswordError && <div className="errorMsg">{confirmPasswordError}</div>}
                </div>

                
                
                <button type="submit" class="btn btn-primary" onClick={saveData}>Submit</button>
            
            <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
        </div>
    )
}



export default withRouter(SignUp) 
