import React from "react";
import { useNavigate } from "react-router-dom";
import Results from "../Results";
import NavBar from "../NavBar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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

}from './HomeElements'
import { getFirestore } from "firebase/firestore";

const db = getFirestore();
const Home = () => {
    // images source
    const bannerOne =  'assets/banner_home.png'
    const bannerTwo =  'assets/banner_outro.png'

    return(
        <>
           <ContainerBanner>
                <ImgBanner src= {bannerOne}/>
            </ContainerBanner>
            <Results></Results>
        </>
    )

}

export default Home;