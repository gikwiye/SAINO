import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: Black;
    height:120px;
    /*margin-top: -120px; */
    display:flex;
    justify-content:space-between;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;
    @media screen and (max-width:960px){
        transition: 0,5s all ease;
    }
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    

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
    text-decoration:none;
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
    margin-right: -22px; 
    font-family: 'Montserrat_thin';

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`

export const NavLinks= styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom : 3px solid #c3c7c5;
}
`