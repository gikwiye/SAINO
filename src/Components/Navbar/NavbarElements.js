import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav ? '#000':'transparent')};
    height:140px;
    margin-top: -140px; 
    display:flex;
    justify-content:space-between;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;
    transition: background-color 200ms linear;
    @media screen and (max-width:960px){
        transition: 0,5s all ease;
    }
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:auto;
    z-index:1;
    width:100%;
    padding:0 138px;
    

`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor:pointer;
    font-size:1,5rem;
    display:flex;
    align-items: center;
    margin-left:40px;
    font-weight:bold;
    height:auto;
`

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,100%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;

    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none;
    text-align: center; 
    //margin-right: -22px; 
    font-family: 'GTWalsheim';

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:auto;
    width:auto;
    padding: 0 1rem;
`

export const NavLinks = styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
height:100%;
cursor: pointer;

&.active {
    border-bottom : 3px solid #c3c7c5;
}
`
export const Language = styled.select`
width: 50px;
height: 32px;
background: #FFFFFF;
border-radius: 4px;

`