import styled from "styled-components";


export const FormLabels = styled.label`

font-family: 'Oswald';
font-weight: 600ð;
font-size: 0.75rem;


color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`

export const Input = styled.input `

width: 220px;
height: 38px;
display:inline-flex;
font-size: 0.8rem;
border-color: #CAFD00;
border-style: solid;
border-width: 1px;
border-radius: 4px;
padding: 0px 5px;
background: #161616; 
color:  white;
`

////////---------------Containers
export const Logo = styled.img`

    width:150px;
    margin-left:0px;
    margin-right:auto;
    margin-bottom:40px;
    margin-top:40px;
    display: flex;
    justify-content: center;

  
    
    @media only screen and (max-width: 760px) {
        width:100px;
        display:none;

    
    

        
      }
`

export const ContainerBanner = styled.div`
background: #161616;
height:${props => props.small ? '80px' : '150px'};

`

export const ContainerLogo = styled.div`
    width:240px;
    height:80px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;


    background:#fffff;

    @media only screen and (max-width: 760px) {
        width:100px;
        display:none;

    
    

        
      }

`

export const ContainerSegments = styled.div`
    width:240px;
    height:80px;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;


    background:#fffff;

`
export const Container50 = styled.img`

    background: #161616;
    min-height:${props => props.small ? '80px' : '100px'};
    max-height:${props => props.small ? '100px' : '200px'};
    width:100%;
    object-fit: ${props => props.small ? 'cover' : 'cover'};
    object-position: ${props => props.small ? '50% 0%' : '15% 0'} ;
`
export const Container = styled.div`
    width:360px;
    height:auto;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;


    background:#fffff;
`
export const HorizontalWrapper = styled.div`
    width:268px;
    height:auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:row;


    background:#fffff;


`
/////--------------Text
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
    font-weight: 600ð;
    font-size: 0.75rem;
    margin:15px;
    
    color: ${props => props.variation ? " #CAFD00" : '#FFFFFF'};
`
////////////---------------BUTTONS
export const Button = styled.button`

height: 48px;
width: 120px;
margin-bottom: 20px;
margin-top:10px;

background: #CAFD00;

border-style: solid;
border-width: 0 0 0px;
border-radius: 4px;
cursor: pointer;

font-family: 'Oswald';
font-weight: 700;
font-size: 0.75rem;
color: #161616;


&: hover {
    transition: all 0.3s ease-in-out;

    background: #E1FF50;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5)
}
`

export const Link = styled.button`

height: 48px;
width: 120px;
margin-bottom: 20px;
margin-top:10px;

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

    background: #E1FF50;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5);
    color: #161616;
}
`
export const Link2 = styled.button`

height: 48px;
width: 120px;
margin-bottom: 20px;
margin-top:0px;

background: #161616;

border-style: solid;
border-width: 0 0 0px;
border-radius: 4px;
cursor: pointer;

font-family: 'Oswald';
font-weight: 300;
font-size: 0.6rem;
color: #81C2FF;


&: hover {
    transition: all 0.3s ease-in-out;

    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  
    color: #CAFD00;
}
`
export const SeePass  = styled.button`
height:38px;
width:38px;
position:relative;
background: #161616;

border-style: solid;
border-width: 0 0 0px;
border-radius: 4px;
cursor: pointer;
`
export const SeePassImg  = styled.img`
height:16px;
width:16px;

`
