import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom"

import {
    Balance,
    Button,
    Container, IMG, Logo, Nav, NavContainer, MobileNavMenu, MenuButton
}from './NavBarElements'

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
    const location = useLocation();


    useEffect(  () =>  {
        checkURL()
        // code to run on component mount
    },)

    const checkURL = () =>{
        if (location.pathname === "/"){
            setIsIntro('true')
            setHome('')
            setTournaments('')
            setAnalysis('')
            setLeaderboards('')
        }
        else if (location.pathname === "/home"){
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
            <MenuButton>
                TOURNAMENTS
            </MenuButton>
            <MenuButton>
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
            <Balance>JOIN</Balance>
            <NavContainer isIntro={isIntro}>
                <Nav isCurrent ={Home}>Home</Nav>
                <Nav isCurrent ={Tournaments} >Tournaments</Nav>
                <Nav isCurrent ={Analysis}>Analysis</Nav>
                <Nav isCurrent ={LeaderBoards}>Leaderboards</Nav>
            </NavContainer>
        </Container>
        </>
    )
    }

export default NavBar;