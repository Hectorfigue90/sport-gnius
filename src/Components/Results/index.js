import React, {useState, useEffect} from "react";
import * as $ from 'jquery';
import {app} from '../../firebase'
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; 


import {
    ContainerCard, Tab,HorizontalContainer, Container100, HorizontalContainerScroll, LeagueButton, LeagueLogo, MatchContainer, MatchSegment, H2 , H3, H1, ResultSegment, CellTeam, MatchOutterContainer,MatchHorizontalContainer, P, Container50

}from './ResultElements'
import { initializeApp } from "firebase/app";



const Results = () => {

    const [Upcoming, setUpcoming] = useState('selected')
    const [Results, setResults] = useState('')
    const [Live, setLive] = useState('')
    
    //leagues state
    //champios
    const [CL, setCL] = useState('')
    //primera de espana
    const [PD, setPD] = useState('')
    //premier league
    const [PL, setPL] = useState('')
    //serie A
    const [SA, setSA] = useState('')
    //bundesliga
    const [BL1, setBL1] = useState('')


    //api data
    const [List, setList] = useState([])
    //api consts
    const [Status, setStatus] = useState('SCHEDULED')
    const [League, setleague] = useState('PD')
    const [Stage, setStage] = useState('QUARTER_FINALS')
    const [Matchday, setMatchday] = useState('30')

    const [MatchdayPD, setMatchdayPD] = useState('30')
    const [MatchdayPL, setMatchdayPL] = useState('')
    const [MatchdaySA, setMatchdaySA] = useState('')
    const [MatchdayBL1, setMatchdayBL1] = useState('');
    

      //declare fireStore 
      const db = getFirestore();
      //firebase references

    useEffect(() => {
        initializeStates()
        fetchPD()
    }, []);

    //fetchleague
    useEffect(() => {
        console.log(Status)
        console.log(League)
        if (League === 'PD'){
            fetchPD()
        }else if (League === 'PL') {
            fetchPL()
        } else if (League === 'SA') {
            fetchSA()
        }
       
    }, [Status]);



    //set status to 'FINISHED'
    const results = (event) => {
        setStatus('FINISHED')
        setUpcoming('')
        setResults('selected')
        setLive('')
    }
    //set status to 'SCHEDULED'
    const upcoming = () => {
        setStatus('SCHEDULED')
        setUpcoming('selected')
        setResults('')
        setLive('')
        console.log(Status)
    }

    //refresh 
    
    //fetchMatchDay
    const initializeStates = async() => {
        
        const MatchdayPDref = doc(db, "currentMatchday", 'PD');
        const PDsnap =  await getDoc(MatchdayPDref);
        setleague('PD')
        setMatchdayPD(PDsnap.data().matchday);
        setMatchday(PDsnap.data().matchday);

        const MatchdayPLref = doc(db, "currentMatchday", 'PL');
        const PLsnap =  await getDoc(MatchdayPLref);
        setMatchdayPL(PLsnap.data().matchday);

        const MatchdaySAref = doc(db, "currentMatchday", 'SA');
        const SAsnap =  await getDoc(MatchdaySAref);
        setMatchdaySA(SAsnap.data().matchday);

        const MatchdayBL1ref = doc(db, "currentMatchday", 'BL1');
        const BL1snap =  await getDoc(MatchdayBL1ref);
        setMatchdayBL1(BL1snap.data().matchday);
    
    }
    //------- fetch results from API 
    //primera de espana - PD
    const fetchPD = async() => {
        var listArray =[]
        if (Status === 'FINISHED'){
            var newMatchdayPD= (parseInt(MatchdayPD) - 1)
            setMatchday(newMatchdayPD)

            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/PD/matches/?matchday=' + (newMatchdayPD) ,
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)
    
                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('PD')
                        setMatchday(newMatchdayPD)
                        
                        setPD('selected')
                        setPL('')
                        setSA('');
                        
                    })
                }); 
                
        } else {
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/PD/matches/?matchday=' + (MatchdayPD) ,
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)

                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('PD')
                        setMatchday(MatchdayPD)
                        
                        setPD('selected')
                        setPL('')
                        setSA('');
                        
                    })
            }); 
        }
    }
    //premier league - PL
    const fetchPL = async() => {
        var listArray =[]
        if (Status === 'FINISHED'){
            var newMatchdayPL = (parseInt(MatchdayPL) - 1)
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/PL/matches/?matchday=' + (newMatchdayPL),
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)
    
                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('PL')
                        setMatchday(newMatchdayPL)

                        setPD('')
                        setPL('selected')
                        setSA('')
                    })
                        
                }); 

        }else{
            
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/PL/matches/?matchday=' + (MatchdayPL),
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)
    
                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('PL')
                        setMatchday(MatchdayPL)

                        setPD('')
                        setPL('selected')
                        setSA('')
                    })
                        
                }); 
        }

    } 
    //serie A - SA
    const fetchSA = async() => {
        var listArray =[]
        if (Status === 'FINISHED'){
            var newMatchdaySA = (parseInt(MatchdaySA) - 1) 
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/SA/matches/?matchday=' + (newMatchdaySA)  ,
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)

                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('SA')
                        setMatchday(newMatchdaySA)

                        setPD('')
                        setPL('')
                        setSA('selected')
                
                    })
                });
        }else{
                $.ajax({
                    headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                    url: 'http://api.football-data.org/v2/competitions/SA/matches/?matchday=' + (MatchdaySA)  ,
                    dataType: 'json',
                    type: 'GET',
                    }).done(function(response) {
                    // do something with the response, e.g. isolate the id of a linked resource   
                        listArray = listArray.concat(response)
    
                        setList(response.matches)
                        listArray.map((matches) => {
                            var newList = matches.matches
                            setList(newList)
                            setleague('SA')
                            setMatchday(MatchdaySA)
    
                            setPD('')
                            setPL('')
                            setSA('selected')
                    
                        })
                    });

        } 
        } 
    //bundesliga - BL1
    const fetchBL1 = async() => {
        var listArray =[]
        if (Status === 'FINISHED'){
            var newMatchdayBL1 = (parseInt(MatchdayBL1) - 1) 
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/SA/matches/?matchday=' + (newMatchdayBL1)  ,
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)

                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('BL1')
                        setMatchday(newMatchdayBL1)

                        setPD('')
                        setPL('')
                        setSA('')
                        setBL1('selected')
                
                    })
                });
        }else{
            $.ajax({
                headers: { 'X-Auth-Token': '1444361c2fc34a059bacd36d3fba7c49' },
                url: 'http://api.football-data.org/v2/competitions/BL1/matches/?matchday=' + (MatchdayBL1)  ,
                dataType: 'json',
                type: 'GET',
                }).done(function(response) {
                // do something with the response, e.g. isolate the id of a linked resource   
                    listArray = listArray.concat(response)

                    setList(response.matches)
                    listArray.map((matches) => {
                        var newList = matches.matches
                        setList(newList)
                        setleague('BL1')
                        setMatchday(MatchdayBL1)

                        setPD('')
                        setPL('')
                        setSA('')
                        setBL1('selected')
                
                    })
                }); 
        }
        
    }    
    return(
        <>
          
            <Container100><H1 variation = 'true'>MATCHDAY {Matchday}</H1></Container100>
            
            <ContainerCard>
                <HorizontalContainer>
                    <Tab isCurrent = {Upcoming} onClick ={upcoming}>Upcoming</Tab>
                    <Tab isCurrent = {Results} onClick ={results}>Results</Tab>
                    <Tab isCurrent = {Live}>Live</Tab>
                </HorizontalContainer>
                <HorizontalContainerScroll>
                    <LeagueButton  selected = {PD} onClick={fetchPD}><LeagueLogo src= 'assets/leaguesLogos/primeraLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = {PL} onClick={fetchPL} ><LeagueLogo src= 'assets/leaguesLogos/premierLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = {SA} onClick={fetchSA}><LeagueLogo src= 'assets/leaguesLogos/serieaLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = {BL1} onClick={fetchBL1}><LeagueLogo src= 'assets/leaguesLogos/bundesligaLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = ''><LeagueLogo src= 'assets/leaguesLogos/ligueLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = '' ><LeagueLogo src= 'assets/leaguesLogos/serieaBrLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = ''><LeagueLogo src= 'assets/leaguesLogos/eflLogo.svg'/></LeagueButton>
                    <LeagueButton  selected = ''><LeagueLogo src= 'assets/leaguesLogos/championsLogo.svg'/></LeagueButton>
                </HorizontalContainerScroll>
                {List.map(({ id, awayTeam, homeTeam, score, utcDate, matchday}) => 
                    <MatchOutterContainer key={id}>
                        <MatchContainer>
                            <MatchSegment>
                                <H2 variation = 'true'>Home</H2>
                                <ResultSegment>
                                    <CellTeam>
                                        <H2 >{homeTeam.name}</H2>
                                    </CellTeam>
                                    <H2>{score.fullTime.homeTeam}</H2>
                                </ResultSegment>
                                <ResultSegment>
                                    <CellTeam>
                                        <H3 variation = 'true'>1st half</H3>
                                    </CellTeam>
                                    <H3 variation = 'true'>{score.halfTime.homeTeam}</H3>
                                </ResultSegment>
                            </MatchSegment>

                            <MatchSegment>
                                <H2 variation = 'true'>Away</H2>
                                <ResultSegment>
                                    <CellTeam>
                                        <H2 >{awayTeam.name}</H2>
                                    </CellTeam>
                                    <H2>{score.fullTime.homeTeam}</H2>
                                </ResultSegment>
                                <ResultSegment>
                                    <CellTeam>
                                        <H3 variation = 'true'>1st half</H3>
                                    </CellTeam>
                                    <H3 variation = 'true'>{score.halfTime.homeTeam}</H3>
                                </ResultSegment>
                            </MatchSegment>
                        </MatchContainer>
                        <MatchHorizontalContainer>
                            <P variation='true'> 
                                {utcDate}
                            </P>
                            <P >
                            {id}
                            </P>
                            <P>
                               Matchday:{matchday}
                            </P>
                        </MatchHorizontalContainer>
                        <Container50></Container50>
                    </MatchOutterContainer>
                )}
            </ContainerCard>
        </>
    )

}


export default Results;