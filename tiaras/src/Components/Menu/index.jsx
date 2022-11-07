// import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from "react";
import { Menue } from "./style";
import { Link } from "react-router-dom";

export default function Menu() {

  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  }

  return (

    <div className="containner">



      <Menue>

        <header>


          <Link to={'/'}>
            <div className="icon">
              <img src="./static/images/Icon/favicon.ico" alt="" />
            </div>
          </Link>



          <nav className={active ? "menu menuOpen" : "menu menuClos"}>


            <ul className='listItens'>
              <Link to={'/'}>
                <li>Inicio</li>
              </Link>

              <Link to={'/a2'} >
                <li>Menu2</li>
              </Link>

              <Link to={'/a3'} >
                <li>Menu3</li>
              </Link>

              <Link to={'/a4'} >
                <li>Menu4</li>
              </Link>

              <Link to={'/a1'} >
                <li>Menu5</li>
              </Link>


            </ul>

          </nav>
          {/* instalar npm install react-icons */}

          <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
            <div className="hamburguer hamburguerIcon"></div>
          </div>

        </header>
      </Menue>


    </div>
  );
}
