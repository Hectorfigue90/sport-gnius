import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import * as $ from 'jquery';
import {app} from '../../firebase'
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; 


import {
    ContainerCard, Tab,HorizontalContainer, Container100, ContainerBanner, ImgBanner, H1, H2, H3, P,TournamentsContainer,Button,

}from './TournamentsElements'

const bannerOne =  'assets/banner_tournaments.png'


const Tournaments = () => {
    let navigate = useNavigate()

    const gotoPD = () => {
        navigate('/pdtournament')
    }
    return(
        <>
        <ContainerBanner>
                <ImgBanner src= {bannerOne}/>
        </ContainerBanner>
        
        <Container100>
            <H1 variation='true'>HOT</H1>
        </Container100>
        <TournamentsContainer>
            <ContainerCard>
                <H1>LA</H1>
                <H1>LIGA</H1>
                <H1>SANTANDER</H1>

                <H2 variation = 'true'>Matchday - 34</H2>
                <H2>Deadline: 04/28/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button onClick={gotoPD}> JOIN NOW </Button>
            </ContainerCard>

            <ContainerCard>
                <H1>ENGLISH</H1>
                <H1>PREMIER</H1>
                <H1>LEAGUE</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>

            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>
            
        </TournamentsContainer>

        <Container100>
            <H1 variation='true'>BIG BAGZ</H1> 
        </Container100>
        <TournamentsContainer>
            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>

            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>

            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>

            
            
        </TournamentsContainer>

        <Container100>
            <H1 variation='true'>CHAMPIONSHIPS</H1> 
        </Container100>
        <TournamentsContainer>
            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>

            <ContainerCard>
                <H1>PRIMERA</H1>
                <H1>DE</H1>
                <H1>ESPANA</H1>

                <H2 variation = 'true'>Pool: $1.000</H2>
                <H2>Deadline: 04/30/2022</H2>
                <P variation='true'>Fee: $2.00</P>
                <Button> JOIN NOW </Button>
            </ContainerCard>
            
        </TournamentsContainer>
        </>
    )
    
}

export default Tournaments;