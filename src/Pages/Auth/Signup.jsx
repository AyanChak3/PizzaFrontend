import { useState } from "react";
import toast from "react-hot-toast"
import SignUpPresentation from "./SignupPresentation";
//Container for the Signup Page
function Signup(){
    
    const [signUpState,setSignUpState] = useState({
        firstName : '',
        email : '',
        mobileNumber : '',
        password : ''

    })

    function handleUserInput(e){
        const {name,value}=e.target;
        setSignUpState({
            ...signUpState,
            [name] : value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();//to prevent the form from reloading the page
        console.log(signUpState)
         //Adding validations for the form input
        if(!signUpState.email || !signUpState.firstName||!signUpState.mobileNumber ||!signUpState.password ){
            toast.error("Missing values from the form")
            return;
        }
        //check firstName
        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20){
            toast.error("First name should be atleast 5 characters long and maximum 20 characters long")
            return
        }
        //check email
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("Invalid email address")
            return
        }
        //check mobile number length to be between 10-12
        if(signUpState.mobileNumber.length < 10 || !signUpState.mobileNumber.length >12 ){
            toast.error("Mobile Number should be 10-12 characters")
            return
        }
    }
    return(
        <SignUpPresentation 
        handleFormSubmit = {handleFormSubmit}
        handleUserInput = {handleUserInput}
        />
    )

}
export default Signup;