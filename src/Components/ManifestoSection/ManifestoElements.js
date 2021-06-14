import styled from 'styled-components';


export const ManifestoContainer = styled.div`
    
    background-color: #141414;
    width: 100%;
    height: 1170px;
    top: 1300px;
    overflow-x:clip;
    
`
export const ManifestoWrapper = styled.div`
    
    position:relative;
    width:100%;
    height:100%;
    
    

`
export const ManifestoTitleContainer = styled.div`
    
    position:absolute;
    width:357px;
    height:39px;
    left:155px;
    top:160px;
`

export const ManifestoTitle = styled.h1`
    font-family: 'Legatum-Light';
    font-size:48px;
    line-height:14px;
    color:#FFFFFF;
`

export const ManifestoText= styled.p`
    position:absolute;
    width:438px;
    height:200px;
    left:155px;
    top:224px;  
    color:#FFFFFF;
    z-index:2;
    font-size:14px;
    line-height:24px;
    font-family:'Montserrat_regular';

    @media screen and (max-width:600px){
        width:auto;
    }
`
export const ManifestoBgText = styled.h1`
    
    position: absolute;
    width: 1529px;
    height: 63px;
    font-family: 'Legatum-Light';
    font-size: 200px;
    line-height: 14px;
    top:422px;
    left:385px;
    color: #202020;
`

export const ManifestoFgImg = styled.div`
position: absolute;
width: 440px;
height: 642px;
left: 155px;
top: 608px;
background: #4A4A4A;

z-index:3;
`

export const ManifestoTitleTpRight = styled.h1`
    position:absolute;
    top:660px;
    left:730px;
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
    left:730px;
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
    left:730px;
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
    left:730px;
    color:#FFFFFF;
    font-family:'Montserrat_regular';
    width: 210px;
    height: 166px;
    font-size: 14px;
    line-height: 24px;

    `
export const ManifestoTitleBtmRight= styled.h1`
    position:absolute;
    width: 31px;
    height: 16px;
    top:872px;
    left:1075px;
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
    left:1075px;
    color:#FFFFFF;
    font-family:'Montserrat_regular';
    width: 210px;
    height: 166px;
    font-size: 14px;
    line-height: 24px;

    `