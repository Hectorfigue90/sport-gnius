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
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content: flex-start;

background: #161616;

border-color: #CAFD00;
border-style: solid;
border-width: .5px;;
border-radius: 4px;
cursor: pointer;
`

export const MatchOutterContainer = styled.div`
    margin:20px;
    width:auto;

    text-align: start;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 679px) {
       
        margin:5px;
        
    }

    `
export const MatchContainer = styled.div`
    margin:20px;
    min-widt:375px;
    max-Width:760px;
    text-align: start;
    display: flex;
    flex-direction: row;
    height:100px;

    @media only screen and (max-width: 679px) {
        flex-direction: column;
        height: 250px;
        
    }

`
export const MatchSegment = styled.div`
    margin-bottom: 30px;
    margin-right: 30px;
    text-align: start;


`
export const CellTeam = styled.div`
    width: 250px;
    text-align: start;
    `
export const ResultSegment =styled.div`
    display:flex;
    flex-direction:  row;
`
export const MatchHorizontalContainer = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    background: ${props => props.variation ? '#161616' : '#1F1F1F'};
    margin-top:20px;
    width: auto;
    justify-content:flex-start;
    display:flex;
    flex-direction: ${props => props.variation ? 'column' : 'row'};


        
    }

`

export const OptionsContainer = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    background: '#161616';
    margin-top:10px;
    width: auto;
    display:flex;
    flex-direction: row;


        
    }

`



//-------------------------

export const H1 = styled.h1`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 1.5rem;
    margin:0px;


    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H2 = styled.h2`
    font-family: 'Oswald';
    font-weight: 600;
    font-size: 1rem;
    margin:5px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H3 = styled.h3`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    text-align: start;
    margin:5px;

    color: ${props => props.variation ? " #7B7B7B" : '#FFFFFF'};
`
export const P = styled.p`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.65rem;
    margin-left:15px;
    margin-right: 20px;
    
    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`


export const Input = styled.input`
width: 20px;
padding-left: 10px;
padding-right: 10px;

font-family: 'Oswald';
font-weight: 600;
font-size: 0.75rem;
margin:5px;
color: #CAFD00;
background: #161616;
align-text:center;

border-color: #CAFD00;
border-style: solid;
border-width:0px;;
border-radius: 4px;
cursor: pointer;
`

//------------------------

export const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    height: 40px;
    
    overflow: hidden;
    padding: 0px;
    color: black;
    font-weight: bold;
`;

export const StyledLi = styled.li`

    height: 100%;
    &:hover {
        
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 200px;
    z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

export const StyledA = styled.button`
height: 35px;
width: 100px;

background: #161616;

border-style: solid;
border-width: 0 0 0px;
border-radius: 4px;
cursor: pointer;

font-family: 'Oswald';
font-weight: 700;
font-size: 0.75rem;
color: #CAFD00;


&: hover {
    transition: all 0.3s ease-in-out;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5)
}
`

export const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: center;
    background-color:#CAFD00;

    color: #161616;
`;
