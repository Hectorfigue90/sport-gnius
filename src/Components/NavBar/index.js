import React, { useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom"
import {  getAuth, onAuthStateChanged} from "firebase/auth";
import {app} from '../../firebase'
import { doc, getDoc,  getFirestore } from "firebase/firestore"; 

import {
    Balance,
    Button,
    Container, IMG, Logo, Nav, NavContainer, MobileNavMenu, MenuButton
}from './NavBarElements'

import { initializeApp } from "firebase/app";

const NavBar = () => {
//sportGnius logo
    const logo = 'assets/logo.svg'
    const menuIcon = 'assets/menuIcon.svg'

    const [isIntro, setIsIntro] = useState('true')
    const [Tournaments, setTournaments] = useState('')
    const [Home, setHome] = useState('')
    const [Analysis, setAnalysis] = useState('')
    const [LeaderBoards, setLeaderboards] = useState('')
    const [MobileNav, setMobileNav] = useState('')
    const [TotalBalance, setBalance] = useState('JOIN')
    const location = useLocation();

    
    let navigate = useNavigate()

    useEffect(  () =>  {
        checkUser()
        checkURL()
        // code to run on component mount
    }, [])

    const db = getFirestore();

    const logOut = () => {
        const auth = getAuth()
        auth.signOut();
        console.log('User logged out')
    }
    
     const checkUser = () => {
        const auth = getAuth();
        
    
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                console.log('user its signed in', user.email)
                const userRef = doc( db, "users", user.email);
                const docSnap = await getDoc(userRef);

                if (docSnap.exists()) {
                    setBalance('$' + docSnap.data().information.totalBalance);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                console.log(docSnap)
              // User is signed in.
            } else {
                console.log('nooooop')
              // No user is signed in.
            }
          });
    }
    const checkURL = () =>{
        if (location.pathname === "/"){
            setIsIntro('true')
            setHome('')
            setTournaments('')
            setAnalysis('')
            setLeaderboards('')
        }
        else if (location.pathname === "/results"){
                setIsIntro('')
                setHome('true')
                setTournaments('')
                setAnalysis('')
                setLeaderboards('')
            }
            else if (location.pathname === "/tournaments"){
                setIsIntro('')
                setHome('')
                setTournaments('true')
                setAnalysis('')
                setLeaderboards('')
            }
            else if (location.pathname === "/analysis"){
                setIsIntro('')
                setHome('')
                setTournaments('')
                setAnalysis('true')
                setLeaderboards('')
            }
            else if (location.pathname === "/leaderboards"){
                setIsIntro('')
                setHome('')
                setTournaments('')
                setAnalysis('')
                setLeaderboards('true')
            }
            else if (location.pathname === "/auth"){
                setIsIntro('')
                setHome('')
                setTournaments('')
                setAnalysis('')
                setLeaderboards('')
            }
            else if (location.pathname === "/pdtournament"){
                setIsIntro('')
                setHome('')
                setTournaments('')
                setAnalysis('')
                setLeaderboards('')
            }
    }

    const goResults = () =>{

        navigate('/results')
        closeNavBar()
    }

    const goAuth = () =>{

        navigate('/auth')
        closeNavBar()
    }

    const goTournaments = () =>{

        navigate('/tournaments')
        closeNavBar()

    }
    const openNavBar = () =>{
        setMobileNav('open')
    }

    const closeNavBar = () =>{
        setMobileNav('')
    }
    return (
        <>
        <MobileNavMenu isOpen = {MobileNav}>
            
            <MenuButton onClick={goTournaments}>
                TOURNAMENTS
            </MenuButton>
            <MenuButton onClick={goResults}>
                RESULTS
            </MenuButton>
            <MenuButton>
                LEADERBOARDS
            </MenuButton>
            <MenuButton>
                ANALYSIS
            </MenuButton>
            <MenuButton>
            </MenuButton>
            <MenuButton onClick={closeNavBar}>
                CLOSE
            </MenuButton>
        </MobileNavMenu>
        <Container>
            <Logo src = {logo} />
            <Button onClick={openNavBar}><IMG src={menuIcon}/></Button>
            <Balance onClick={goAuth}>{TotalBalance}</Balance>
            <NavContainer isIntro={isIntro}>
                <Nav isCurrent ={Tournaments} onClick = {goTournaments}>Tournaments</Nav>
                <Nav isCurrent ={Home} onClick = {goResults}>Results</Nav>
                <Nav isCurrent ={Analysis} >Analysis</Nav>
                <Nav isCurrent ={LeaderBoards} onClick={logOut}>Leaderboards</Nav>
            </NavContainer>
        </Container>
        </>
    )
    }

export default NavBar;