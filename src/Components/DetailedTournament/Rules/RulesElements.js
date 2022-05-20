import styled from 'styled-components'

export const MainContainer = styled.div`
width:100%;
height:auto;
position:relative;
display:flex;
align-items:center;

`

export const RulesContainer = styled.div`
width:100%;
height:auto;
position:relative;
margin:25px;
margin-top:100px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;

background: ##161616;

border-color: #CAFD00;
border-style: solid;
border-width: .5px;;
border-radius: 4px;
cursor: pointer;
`


//-------------------------

export const H1 = styled.h1`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 1.5rem;
    margin:10px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H2 = styled.h2`
    font-family: 'Oswald';
    font-weight: 600;
    font-size: 1rem;
    margin:0px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H3 = styled.h3`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    text-align: left;
    margin:20px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const P = styled.p`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    margin:15px;
    
    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`