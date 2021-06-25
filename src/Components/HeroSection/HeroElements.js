import styled from 'styled-components'
import Rectangle_1 from '../../Images/Pictures/Rectangle_1.jpg'



export const HeroContainer = styled.div`
background-image:url(${Rectangle_1});
display:flex;
justify-content:center;
background-size: cover;
filter: grayscale(1);
align-items:center;
padding: 0 30 px;
top:0;
height:950px;
position:relative;
overflow:hidden
`
export const TextContainer  = styled.div`
width: auto;
height: auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 200px;

`
export const ImageOv = styled.div`
position:absolute; 
background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
width:100%;
height:100%;
top:0;
right:0;
left:0;
bottom:0;
`
export const HeroP2 = styled.div`

font-family:'GTWalsheim'; 
font-size:12px;
line-height: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color:white;
position: absolute;
width: 215px;
height: 33px;
left:5px;
margin-top:-210px;

`

export const HeroH1= styled.h1`
position: relative;
height: 178px;
//left: 155px;
font-size: 120px;
line-height: 120px;
/* or 120% */
color: #FFFFFF;

`
export const HeroP3 = styled.div`
position:relative;
width:200px;
height: auto;
padding-top:250px;
padding-right: 5px;

color:white;
font-family:'GTWalsheim';
`


export const TitleStyle1 = styled.p`
    font-family:'GTWalsheim';
`
