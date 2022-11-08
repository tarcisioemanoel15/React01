import styled from 'styled-components';


export const Menue = styled.header`


@font-face {
  font-family: parisienne ;
  src: url('./static/fonts/Parisienne/Parisienne-Regular.ttf');
};

li,
a {
  text-decoration: none;
  list-style: none;
  margin-right: 10px;
  padding-bottom: 10px;
  color: white;
}

header {
  font-family: parisienne;
  background-color:#e794e2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  position: fixed;
  text-align: center;
  align-items: center;
  z-index: 1;
}

header .iconLogo {
  margin-left: 15px;
  color: white;
}

header .iconLogo img{
  width: 30%;
    margin-top: 16px;
    transition: 2s;
  }

  header .iconLogo img:hover{
    width: 50%;
    margin-top: 50px;
    transform: rotate(360deg);
  }



nav ul {
  display: flex;
  margin-top: 15px;
}

.hamburguer {
  display: none;
  content: '';
  top: 50%;
  right: 3%;
  width: 30px;
  height: 6px;
  background: rgb(255, 255, 255);
  position: absolute;
  box-shadow: 0 2px 5px rgba(0 0 0 0.2);
  transition: 0.5s;
}

.hamburguer::after {
  content: '';
  top: 150%;
  left: 0;
  width: 30px;
  height: 6px;
  background: rgb(255, 255, 255);
  position: absolute;
  box-shadow: 0 2px 5px rgba(0 0 0 0.2);
  transition: 0.5s;
}

.hamburguer::before {
  content: '';
  top: -150%;
  left: 0;
  width: 30px;
  height: 6px;
  background: rgb(255, 255, 255);
  position: absolute;
  box-shadow: 0 2px 5px rgba(0 0 0 0.2);
  transition: 0.5s;
}

.icon.iconActive .hamburguer {
  background: transparent;
  box-shadow: 0 2px 5px transparent;
}

.icon.iconActive .hamburguer:after {
  top: 0;
  transform: rotate(225deg);
}

.icon.iconActive .hamburguer::before {
  top: 0;
  transform: rotate(-225deg);
}

.nave ul {
  display: none;
}

@media screen and (max-width:555px) {
  .hamburguer {
    display: flex;
  }

  .menu.menuClos {
    display: none;
  }

  ul.listItens {
    position: absolute;
    margin-top: 25px;
    background-color: #fafafadb;
    display: grid;
    width: 100%;
    right: 0;
    transition: all 2s;
    padding-top: 10px;
    padding-bottom: 10px;

  }

  li,
  a {
    color: rgb(17, 17, 65);
  }

  .nave ul {
    display: grid;
  }


}
`;