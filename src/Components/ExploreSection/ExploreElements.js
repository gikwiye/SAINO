import styled from 'styled-components'

export const ExploreContainer = styled.div`
    display:flex;
    height:500px;
    margin:0 auto;
    background:#F2F2F2; 
    @media screen and (max-width:1353px){
        height:900px;
    }
`

export const ExploreTitle=styled.h1`

    position: relative;
    color:black;
    width:278px;
    left: 153px;
    top: 145px;
    font-size: 24px;
    line-height: 14px;
    font-family:'Legatum-Light';
    
    @media screen and (max-width:1181px){
        
        line-height:20px;
    }
`

export const ExploreWrapper = styled.div`

    display:flex;
    justify-content: space-around;
    width:100%;
    position:relative;
    top:221px;

    @media screen and (max-width:1353px){
        flex-direction:column ;
        justify-content: space-evenly;
        top:50px;
    }
    
`
export const ExploreHeader=styled.h1`

    font-family:'Montserrat_bold';
    padding-bottom: 9px;
    font-size:12px;  
    @media screen and (max-width:281px){
        
        
        left:75px;
    }
    @media screen and (max-width:376px){
        
        
        left:75px;
    }


`
export const ExploreColumn=styled.div`
    
    display: inline-block;
    position: relative;
    bottom:146 px;
    width:325px;
    height:90px;

    @media screen and (max-width:281px){

        width:200px;
    }
    @media screen and (max-width:376px){
        
        width:200px;
    }

    
`
export const ExploreText=styled.p`
    
    height:90px;
    line-height: 24px;
    font-family: 'Montserrat_regular';

    @media screen and (max-width:281px){
        font-size: 10px;
        width:200px;
    }
    @media screen and (max-width:376px){
        
        width:200px;
    }

`