import styled from "styled-components";

export const Main = styled.main`

background-color: blue;
.containerObj{
  te
}


.carousel{
  display: flex;
  background-color: white;
  
  width: 500px;
  margin: auto;
  overflow-x: hidden;
  
}

.container{
  width: 100px;
  
}

.images{
  
  color: white;
  background: black;

  
  position: relative;
  /* right: 16000%; */
  animation: mover infinite 50s linear;

}

@keyframes mover {
  from{
    right: 0%;
  }
  to{
    right: 1600%;

  }
}

.images img{
  width: 100px;
  height: 200px;
  margin: 10px;
  
  
}

`;