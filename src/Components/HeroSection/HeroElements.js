import styled from 'styled-components'



export const HeroContainer = styled.div`
background:black;
display:flex;
justify-content:center;
align-items:center;
padding: 0 30 px;
top:0;
height:950px;
position:relative;
z-index:1;
`

export const HeroBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;

`
export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit:cover;
filter:grayscale(1);
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
z-index:1;
`
export const HeroP2 = styled.p`

font-family:'Montserrat'; 
font-size:12px;
line-height: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color:white;
position: absolute;
width: 215px;
height: 33px;
left: 155px;
top: 230px;
z-index:2;

@media screen and (max-width:440px){
    
    left:75px;
     
 }

`

export const HeroH1= styled.h1`
position: absolute;
height: 178px;
left: 155px;
top: 285px;
font-size: 100px;
line-height: 120px;
/* or 120% */
z-index:3;
color: #FFFFFF;

 @media screen and (max-width:615px){
    font-size:60px;
} 
@media screen and (max-width:440px){
    
    left:75px;
     
 }

`
export const HeroItalic = styled.span`
    font-style:italic;
` 
export const HeroP1 =styled.p`
position: absolute;
font-family:'Montserrat'; 
height: 102px;
left: 615px;
top: 483px;
font-size: 14px;
line-height: 24px;
text-align:justify;
/* or 171% */
z-index:3;
color: #FFFFFF;

@media screen and (min-width:1070px){
    width:440px;
}
@media screen and (max-width:1070px){
    
    left:155px;
    top:700px;
    right:100px;
}
@media screen and (max-width:440px){
    
   left:75px;
   right:75px;
   top: 670px;
   text-align:unset;
}
@media screen and (max-width:319px){
    
    font-size:10px;
 }

`

export const TitleStyle1 = styled.p`
    font-family:'Legatum-Light';
`
