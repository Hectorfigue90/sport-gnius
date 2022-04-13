import styled from "styled-components";

export const Container = styled.div` 
    background: #161616;
    height: 52px;
    width:100vw;
    display: flex;
    flex-direction: row;
    position:fixed;
    z-index:1;

`
export const NavContainer = styled.div`
    background: #161616;
    height: 50px;
    width:50%;
    display: ${props => props.isIntro ? 'none' : 'flex'};
    flex-direction: row;
    position:display;
    justify-content: center;
    align-items: center;
    margin:auto;
    
    @media only screen and (max-width: 760px) {
        display: none;
      }

`
export const Logo = styled.img`

    width:100px;
    margin:auto;
    display: flex;
    left: 15px;
    top:15px;
    position:absolute;
    
    @media only screen and (max-width: 760px) {
        width:80px;
        left: 0px;
        top:0px;
        position:relative;
        justify-content: center;
        align-items: center;
        margin-left:auto;
        margin-right:auto
        position:absolute;
        
      }



`
export const Button = styled.button`
    height: 48px;
    width: 48px;
    margin:0px;
    padding:0px;

    position:absolute;
    left: 0px;

    background: #161616;

    border-style: solid;
    border-width: 0 0 0px;;
    border-radius: 4px;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 760px) {
        display: block;
      }
    
}
    
`
export const Nav = styled.button`
    height: 48px;
    width: 120px;
    margin:auto;
    position:relative;

    background: #161616;
    color: ${props => props.isCurrent ? '#CAFD00' : '#ffffff'};

    font-family: 'Oswald';
    font-weight: 400;
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

    @media only screen and (max-width: 760px) {
        display: none;
      }
    
}`
export const IMG = styled.img`
    height: 15px;
    width: 15px;
    margin: 0px;
    padding: 0px;
    
`
export const Balance = styled.button`
    height: 38px;
    width: 80px;
   
    
    margin-top:6px;
    position:absolute;
    right: 8px;
    

    background: #161616;
    color: #CAFD00;

    font-family: 'Oswald';
    font-weight: 600;
    font-size: 0.8rem;

    border-style: solid;
    border-width: 0 0 0px;;
    border-radius: 4px;
    cursor: pointer;
    display: block;

    &: hover {
        transition: all 0.3s ease-in-out;
    
        background: #CAFD00;
        color: #161616;

        text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    
        @media only screen and (max-width: 640px) {
       
        font-size:0.8rem;
      }


`
export const MenuButton = styled.button`

    width:300px;
    height:100px;

    background: #161616;
    color: #FFFFFF;

    font-family: 'Oswald';
    font-weight: 600;
    font-size: 0.8rem;

    border-style: solid;
    border-width: 0 0 0px;;
    border-radius: 4px;
    cursor: pointer;


`
export const MobileNavMenu = styled.div`

@media only screen and (min-width: 760px) {
    display: none;
  }
    background: #161616;
    width:100%;
    height:100vh;
    position: absolute;
    z-index: 1;
    top: ${props => props.isOpen ? '0px' : '-2000px'};
    transition: all 0.4s ease-in-out;
    margin-top:30px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    


`