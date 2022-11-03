
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
position: fixed;
}

.container{
  background-color: #4e4949db;
  width: 75%;
  height: 50%;
  color: black;
  border-radius: 20px;

  display: grid;
    justify-content: center;
    align-items: center;
}

div.content{
display: flex;
justify-content: center;
}

.container .content img{
  margin-top: -35px;
  width: 80%;
  
}
.close{
  background-color: transparent;
  color: wheat;
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

@media screen and (max-width: 560px) {
  .container .content img{
  width: 100%;
  } 
}
`;