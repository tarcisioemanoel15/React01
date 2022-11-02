
import styled from "styled-components";

export const Mmodal = styled.div`
color: black;

.modal{
width: 100%;
height: 100vh;
top: 0px;
left: 0;
z-index: 0;
background-color: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;

}

.container{
  background-color: #fff;
  width: 60%;
  height: 60%;
  color: black;
  border-radius: 20px;
}

.close{
  background-color: transparent;
  border: none;
  outline: none;
  width: 30px;
  height: 32px;
  right: calc(-100% + 64px);
  cursor: pointer;
  top: 16px;
  display: flex;
  position: relative;
  align-items: center;

}

`;