import styled from "styled-components";


export const VideoPlayer = styled.div`

background-color: aliceblue;
text-align: center;
font-family: Arial, Helvetica, sans-serif;

.btn{
  padding: 25px;
  display: flex;
  justify-content: space-around;
}

.btn button:first-child{
  background-color: green;
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border: none;
  cursor: pointer;

}

.btn button:nth-last-child(1){
  background-color: red;
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border: none;
  cursor: pointer;
}

video{
  width: 50%;
  border-radius: 50px;
}
h1{
  padding: 20px;
}
`;