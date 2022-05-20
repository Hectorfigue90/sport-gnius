import React, {useState}  from 'react'
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import {app} from '../../firebase'

import {
    Input,
    H1,
    H2,
    H3,
    P,
    Container,
    Container50,
    ContainerBanner,
    FormLabels,
    ContainerSegments,
    Button,
    Link,
    Logo,
    Link2,
    SeePass,
    HorizontalWrapper,
    SeePassImg,
    ContainerLogo,

}from './AuthElements'


const Auth = () => {
    let navigate = useNavigate();
    const bannerTwo =  'assets/banner_outro.png'
    const logo = 'assets/logo.svg'
    const eye = 'assets/eye.svg'
    

    const[ user, setUser] = useState('');
    const[ password, setPassword] = useState('');

    const resetpassword = (event) =>{
        if (user.length < 5){
            alert('Please fill up the email field before reseting')
        }else{
        const auth = getAuth();   
        sendPasswordResetEmail(auth, user)
        .then(() => {
            alert('Password reset email sent!')
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    }

    }

    const login = (event) => {
        /* navigate("/dashboard");*/
        event.preventDefault();
 
         console.log('A name was submitted: ' + user);
         console.log('A password was submitted: ' + password);
 
         const auth = getAuth();
         signInWithEmailAndPassword(auth, user, password)
             .then((userCredential) => {
                 // Signed in 
                 const user = userCredential.user;
                 console.log(user)
                 navigate('/tournaments')
                 // ...
             }).catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 
                 alert(errorCode)
                 // ..
               });
   
    }
    const handleChangeAdmin = (event) =>{
        setUser(event.target.value)
    }

    const handleChangePass = (event) =>{
        setPassword(event.target.value)
    }
        
    const showPassword = (event) =>{
        const inputPass =  document.getElementById('password')
        if(inputPass.type === 'password'){
            document.getElementById('password').type ='text'
        }else{
            document.getElementById('password').type ='password'
        }
    }
    return (
        <>
        
        <ContainerBanner small= 'true'></ContainerBanner>
            <ContainerLogo>
                <Logo src = {logo}></Logo>
            </ContainerLogo>
            
      
        <ContainerSegments>
            <H2> Welcome back </H2>
            <H2 variation ='true'>Gnius!...</H2>
        </ContainerSegments>
        <Container>
            <ContainerSegments>
                <FormLabels variation = 'true'>Email</FormLabels>
                <Input type= "email" value={user} onChange={handleChangeAdmin}></Input>
            </ContainerSegments>
            <ContainerSegments>
                <FormLabels variation = 'true'>Password </FormLabels>
                <HorizontalWrapper>
                <Input id= 'password' type= "password" value={password} onChange={handleChangePass}    required ></Input><SeePass onClick={showPassword}><SeePassImg src={eye}></SeePassImg></SeePass>
                </HorizontalWrapper> 
            </ContainerSegments>
            <Link2 onClick={resetpassword}>Forgot Password?</Link2>
            <Button onClick={login}>LOGIN</Button>
            <Link>REGISTER</Link>
            
        </Container>
        <ContainerBanner small= 'true'>
            <Container50 small= 'true' src={bannerTwo}></Container50>
        </ContainerBanner>
        </>
    )



}
export default Auth;