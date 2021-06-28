import styled from 'styled-components';


export const ManifestoContainer = styled.div`
    display:flex;
    position:relative;
    background-color: #141414;
    width: auto;
    overflow-x: clip;
    height: 1170px;
`
export const ManifestoWrapper = styled.div`
    display:flex;
    position:relative;
    width:100%;
    height:100%;
    
    left:20%;
    @media screen and (max-width:1679px){
        left: 10%;
    }
`
export const ManifestoTitleContainer = styled.div`
    
    position:relative;
    width:440px;
    height:auto;
    top:154px;
`

export const ManifestoTitle = styled.h1`
    font-family: 'Legatum-Light';
    height:auto;
    font-size:48px;
    color:#FFFFFF;
`

export const ManifestoText = styled.p`
    position:relative;
    width:auto;
    height:200px;
    top:30px;  
    color:#FFFFFF;
    z-index:2;
    font-size:14px;
    line-height:24px;
    font-family:'Montserrat_regular';
`
export const ManifestoBgText = styled.h1`
    
    position: relative;  
    font-family: 'Legatum-Light';
    height:fit-content;
    font-size: 200px;
    top:240px;
    margin-left: -150px;
    color: #202020;
`

export const ManifestoFgImg = styled.div`
position: absolute;
width: 440px;
height: 642px;
top: 608px;
background: #4A4A4A;

z-index:3;
`

export const ManifestoTitleTpRight = styled.h1`
    position:absolute;
    top:660px;
    left:500px;
    color:#FFFFFF;
    font-family: 'Legatum-Light';
    width: 224px;
    height: 14px;
    font-size: 24px;
    line-height: 14px;


`
export const ManifestoTextTpRight = styled.p`
    position:absolute;
    top:700px;
    left:500px;
    color:#FFFFFF;
    font-family:'Montserrat_regular';
    width: 555px;
    height: 14px;
    font-size: 14px;
    line-height: 24px;  


`
export const ManifestoTitleBtmLeft = styled.h1`
    position:absolute;
    top:872px;
    left:500px;
    color:#FFFFFF;
    font-family: 'Montserrat_regular';
    width: 26px;
    height: 16px;       
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    `

export const ManifestoTextBtmLeft = styled.p`
    
    position:absolute;
    top:901px;
    left:500px;
    color:#FFFFFF;
    font-family:'Montserrat_regular';
    width: 210px;
    height: 166px;
    font-size: 14px;
    line-height: 24px;

    `
export const ManifestoTitleBtmRight = styled.h1`
    position:absolute;
    width: 31px;
    height: 16px;
    top:872px;
    left:845px;
    color:#FFFFFF;
    font-family: 'Montserrat_regular';
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const ManifestoTextBtmRight = styled.p`
    
    position:absolute;
    top:901px;
    left:845px;
    color:#FFFFFF;
    font-family:'Montserrat_regular';
    width: 210px;
    height: 166px;
    font-size: 14px;
    line-height: 24px;

    `