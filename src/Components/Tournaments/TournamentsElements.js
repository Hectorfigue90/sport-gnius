import styled from "styled-components";


export const Button = styled.button`

height: 60px;
width: 300px;

background: #CAFD00;
margin-top: 40px;

border-style: solid;
border-width: 0 0 0px;

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
    margin-bottom:50px;

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
    margin:1px;

    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const H3 = styled.h3`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.75rem;
    text-align: start;
    margin:1px;

    color: ${props => props.variation ? " #7B7B7B" : '#FFFFFF'};
`
export const P = styled.p`
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 0.65rem;
    margin:1px;
    
    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
export const TournamentsContainer = styled.div`
width : 100%;
display: flex;
justify-content: flex-start;
align-items: center;
text-align: center;
flex-direction:row;
margin: auto;


@media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 300px;
    
}

`
export const ContainerCard = styled.div`
    padding-top: 20px;
    background-image: url('assets/TImages/tr1.png');
    background-size: cover;
    width:300px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:60px;

`