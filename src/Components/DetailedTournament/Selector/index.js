import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { query,doc, getDoc, getDocs } from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";

import * as $ from 'jquery';
import { MainContainer,H1,H2,H3,P, MatchContainer, MatchHorizontalContainer, MatchOutterContainer,
MatchSegment, CellTeam,ResultSegment, Input , StyledUl, StyledLi, StyledA, DropDownContent, DropDownLi, SubA, OptionsContainer} from "./SelectorElements";



const Selector = () =>{ 
  
      //api data
    const [List, setList] = useState([])
          //declare fireStore 
          const db = getFirestore();
          //firebase references
    
        useEffect(() => {
            
            newFetchPD()
        }, []);
  const newFetchPD = async() => {
        var listArray =[]
        const matchesRef = query(collection( db, "currentMatchday", 'PD', '34' ));
        const querySnapshot = await getDocs(matchesRef);
        querySnapshot.forEach((doc) => { 
            listArray = listArray.concat(doc.data())
            setList(listArray)
            console.log(listArray)
        });
    }
        
        
    return(
        <MatchOutterContainer >
        <MatchContainer>
            <MatchSegment>
                <H2 variation = 'true'>Home</H2>
                <ResultSegment>
                    <CellTeam>
                        <H2 >hola</H2>
                    </CellTeam>
                        <Input></Input>
                </ResultSegment>
                <ResultSegment>
                    <CellTeam>
                        <H3 variation = 'true'>1st half</H3>
                    </CellTeam>
                    <Input></Input>
                </ResultSegment>
            </MatchSegment>

            <MatchSegment>
                <H2 variation = 'true'>Away</H2>
                <ResultSegment>
                    <CellTeam>
                        <H2 >hola2</H2>
                    </CellTeam>
                        <Input></Input>
                </ResultSegment>
                <ResultSegment>
                    <CellTeam>
                        <H3 variation = 'true'>1st half</H3>
                    </CellTeam>
                        <Input></Input>
                </ResultSegment>
            </MatchSegment>
        </MatchContainer>
        <MatchHorizontalContainer variation = 'true'>
            <H2> 
                1st team to score
            </H2>
        </MatchHorizontalContainer >
        <MatchHorizontalContainer variation = 'true'>
            <OptionsContainer>
                <H3 >
                    Select Team:
                </H3>

                <StyledUl>
                    <DropDownLi>
                        <StyledA onClick={() => this.handleClick("DropDown")}>
                            Choose
                        </StyledA>
                        <DropDownContent>
                            {" "}
                            <SubA onClick={() => this.handleClick("Link1")}>
                                Link 1
                            </SubA>
                            <SubA onClick={() => this.handleClick("Link2")}>
                                Link 2
                            </SubA>
                        </DropDownContent>
                    </DropDownLi>
                </StyledUl>
                </OptionsContainer>
                <OptionsContainer>
                <H3 >
                    Player Shirt:
                </H3>
                <Input>
                </Input>
                </OptionsContainer>
        </MatchHorizontalContainer>
        <MatchHorizontalContainer variation = 'true'>
            <H2> 
                1st suspended player
            </H2>
        </MatchHorizontalContainer>
        <MatchHorizontalContainer variation = 'true'>
            <OptionsContainer>
                    <H3 >
                        Select Team:
                    </H3>

                    <StyledUl>
                        <DropDownLi>
                            <StyledA onClick={() => this.handleClick("DropDown")}>
                                Choose
                            </StyledA>
                            <DropDownContent>
                                {" "}
                                <SubA onClick={() => this.handleClick("Link1")}>
                                    Link 1
                                </SubA>
                                <SubA onClick={() => this.handleClick("Link2")}>
                                    Link 2
                                </SubA>
                            </DropDownContent>
                        </DropDownLi>
                    </StyledUl>
                    </OptionsContainer>
                    <OptionsContainer>
                    <H3 >
                        Player Shirt:
                    </H3>
                    <Input>
                    </Input>
            </OptionsContainer>
        </MatchHorizontalContainer>
        <MatchHorizontalContainer>
            <P variation='true'> 
                02/02/02
            </P>
            <P >
            {}
            </P>
            <P>
               Matchday: 29
            </P>
        </MatchHorizontalContainer>
        </MatchOutterContainer>
        
)}  
export default Selector;