import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Button,
    ContainerBanner,
    ImgBanner,
    Container100,
    H1,
    H2,
    H3,
    Container200,
    ImgSteps,
    ContainerCard,
    Container50,

}from './IntroElements'

const Intro = () => {
    // images source
    const bannerOne =  'assets/banner_intro.png'
    const bannerTwo =  'assets/banner_outro.png'
    const step1 = 'assets/step1.svg'
    const step2 = 'assets/step2.svg'
    const step3 = 'assets/step3.svg'
    //declare navigate 
    let navigate = useNavigate()

    //go to home
    const explore = (event) => {
        /* navigate("/dashboard");*/
        navigate('/home')
       
     }
    return (
        <>
            <ContainerBanner>
                <ImgBanner src= {bannerOne}/>
            </ContainerBanner>
            <Container100>
                <Button onClick={explore}> EXPLORE</Button>
            </Container100>
            <Container100>
                <H3>Sport analysis tournaments, Put your knowledge and skills to the test...</H3>
            </Container100>
            <Container200>
                <ContainerCard>
                    <ImgSteps src={step1}></ImgSteps>
                    <H1 variation = 'true'>Join our community</H1>
                    <H2>Sign up and add money.</H2>
                </ContainerCard>
                <ContainerCard>
                    <ImgSteps src={step2}></ImgSteps>
                    <H1 variation = 'true'>Browse tournaments</H1>
                    <H2>Pick between a variety of custom tournaments.</H2>
                </ContainerCard>
                <ContainerCard>
                    <ImgSteps src={step3}></ImgSteps>
                    <H1 variation = 'true'>Compete and win </H1>
                    <H2>Predict results and compete against other players and win.</H2>
                </ContainerCard>
            </Container200>
            <Container100>
                <Button> START NOW!</Button>
            </Container100>
            <Container50></Container50>
            <ContainerBanner small='true'>
                <ImgBanner small= 'true' src= {bannerTwo}/>
            </ContainerBanner>
            
        </>
    )
}
export default Intro;