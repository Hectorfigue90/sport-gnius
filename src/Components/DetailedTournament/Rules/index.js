import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import * as $ from 'jquery';
import { MainContainer,H1,H2,H3, RulesContainer } from "./RulesElements";



const Rules = () =>{
    return(
        <>
           <MainContainer>
               <RulesContainer>
                    <H1 variation= 'true'>Rules</H1>
                    <H3 >Exacto	[10pts] - 
                        Ganador/empate	[10pts] -
                        Ganador primer tiempo/ empate	[10pts] -
                        Primero en anotar	[10pts] -
                        Jugador que anota primero	[10pts] -
                        Gol visitante	[10pts] -
                        Gol local	[10pts] -
                        Diferencia de goles	[10pts] -
                        Expulsion o no 	[10pts] -
                        Equipo del primer o único expulsado	[10pts]</H3>

               </RulesContainer>
           </MainContainer>
        </>


    )


}
export default Rules;