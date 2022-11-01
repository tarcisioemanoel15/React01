import styled from "styled-components";

export const Div = styled.div`
color: blueviolet;
/* margin-top: 50px; */

.container{
  width: 80%;
  background-color: black;
  padding: 30px;
  margin: auto;
}

.image{
  width: 150px;

}



#janelaModal{
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0px;
  top: 0px;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.8);
  overflow: auto;
}

#imgModal{
  margin: auto;
  display: block;
  width: 100px;
  max-width: 800px;
}

#btFechar{
  position: absolute;
  top: 15px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
`;