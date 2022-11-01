import styled from "styled-components";

import milpxfundo1 from "../img/1000pxfundo1.jpg";
import milpxfundo2 from "../img/500pxfundo1.jpg";
import milpxfundo3 from "../img/1fundopequeno.jpg";


export const FundoImg = styled.article`

@font-face {
  font-family: parisienne ;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
};
font-family: parisienne;

background-color: aliceblue;
background-image: url(${milpxfundo1});
background-size: cover;
background-position: center right;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
/* height: 95vh; */

article{
  background-color: #ff41ff73;
  width: 300px;
  /* height: 85%; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-left: 30px;
  border-radius: 40px 0px 40px 0px;
  /* gap: 32px */
}

article div{
  border-radius: 50px;
  padding: 10px 10px;
  display: grid;
  justify-content: center;
}

article div img{
  width: 150px;
}


article div span{
  width: 100%;
  background-color: #ff41ff73;
  border-radius: 10px;
  margin-top: 10px;
}

@media screen and (max-width: 780px){
  background-image: url(${milpxfundo2});
  height: 90vh;
  position: relative;
    
  article{
    flex-direction: initial;
    width: 100%;
    height: 35%;
    border-radius: 0;
    margin-left: 0;
    justify-items: center;
    align-items: center ;
    position: absolute;
    bottom: 0;
    gap:45px
    }
 }
 
 @media screen and (max-width: 590px){
    background-image: url(${milpxfundo3});
    background-position: center center;
    height: 65vh;

    article{
      gap: 5px
    }
    article div img{
      width: 90px;
    }
  }
`;