import styled from "styled-components";


export const Button = styled.button`

height: 50px;
width: 250px;

background: #CAFD00;

border-style: solid;
border-width: 0 0 0px;
border-radius: 4px;
cursor: pointer;

font-family: 'Oswald';
font-weight: 700;
font-size: 1.5rem;


&: hover {
    transition: all 0.3s ease-in-out;

    background: #E1FF50;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5)
}
`

export const Container50 = styled.div`

    background: #161616;
    
    width:auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 0 0 1px;
    border-color: #1F1F1F;
    border-radius: 0px;
`
export const Container100 = styled.div`

    background:#161616;
    margin-left:40px;
    width:300px;
    height:100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
export const Container200 = styled.div`

    background: #161616;
    width:100vw;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media only screen and (max-width: 800px) {
          flex-direction: column;
          height: 1200px;
          
      }

`
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

export const ContainerCard = styled.div`
    background: #161616;
    width:auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: center;
    margin-left:10px;
    margin-right:10px;

`
export const LeagueLogo = styled.img`
    background: #161616;
    height:40px;
    width:40px;
`

export const HorizontalContainer = styled.div`
    margin:0px;
    background: #161616;
    height: 50px;
    width:auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    

`
export const Tab = styled.button`
    height: 50px;
    width: 80px;
    margin:20px;
    position:relative;

    background: #161616;
    color: ${props => props.isCurrent ? '#CAFD00' : '#ffffff'};

    font-family: 'Oswald';
    font-weight: 500;
    font-size: 0.7rem;

    border-style: solid;
    border-width: 0 0 0px;;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    
    &: hover {
        transition: all 0.3s ease-in-out;

        color: #CAFD00;
        
        text-shadow: 0px 0px 8px rgba(202,253,0,0.5);

      }
    
`
export const HorizontalContainerScroll = styled.div`
    
    margin-top: 20px;
    overflow: auto;
    white-space: nowrap;
    background: #161616;
    height: 80px;
    width:96vw;
    display:flex;
    justify-content: flex-start;
    align-items: center;

    

`
export const LeagueButton = styled.button`
    height: 60px;
    width: 60px;
    margin-right: 25px;
    margin-left: 25px;

    position:relative;


    

    background: #161616;

    font-family: 'Oswald';
    font-weight: 500;
    font-size: 0.7rem;

    border-style: solid;
    border-width: ${props => props.selected ? '0 0 3px' : '0 0 0px'};
    border-color: ${props => props.selected ? '#CAFD00' : '#ffffff'};
    border-radius: 0px;
    cursor: pointer;

    &: hover {
        transition: all 0.1s ease-in-out;
        border-style: solid;
        border-color: #CAFD00;
        border-width: 0 0 2px;
        border-radius: 0px;

        color: #CAFD00;
        
        text-shadow: 0px 0px 8px rgba(202,253,0,0.5);

      }
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
    background: #1F1F1F;
    margin-top:10px;
    width: auto;
    
    text-align: center;
    display:flex;
    flex-direction: row;


        
    }

`