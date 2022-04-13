import styled from "styled-components";


export const ContainerBanner = styled.div`
background: #161616;
height:${props => props.small ? '100px' : '390px'};



`

export const ImgBanner = styled.img`

background: #161616;
min-height:${props => props.small ? '100px' : '390px'};
max-height:${props => props.small ? '150px' : '400px'};
width:100%;
object-fit: ${props => props.small ? 'cover' : 'cover'};
object-position: ${props => props.small ? '50% 0%' : '15% 0'} ;
`
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
color: #161616;


&: hover {
    transition: all 0.3s ease-in-out;

    background: #E1FF50;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5)
}
`

export const Container50 = styled.div`

    background: #161616;
    
    width:100vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Container100 = styled.div`

    background: #161616;
    margin-top:50px;
    width:100vw;
    height: 100px;
    display: flex;
    justify-content: center;
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
    margin:0px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H3 = styled.h3`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    margin:15px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const P = styled.p`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    margin:15px;
    
    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`


export const ContainerCard = styled.div`
    background: #161616;
    margin:50px;
    
    width:350px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

`
export const ImgSteps = styled.img`
    background: #161616;
    min-height:200px;
    width:200px;
`