// import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from "react";
import { Homee } from "./style";

export default function Home() {

  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  }

  return (

    <Homee>

      <header>

        <h3>LOGO</h3>



        <nav className={active ? "menu menuOpen" : "menu menuClos"}>


          <ul className='listItens'>
            <li><a href="/#">Home1</a></li>
            <li><a href="/#">Home2</a></li>
            <li><a href="/#">Home3</a></li>
            <li><a href="/#">Home4</a></li>
            <li><a href="/#">Home5</a></li>
          </ul>

        </nav>
        {/* instalar npm install react-icons */}

        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
          <div className="hamburguer hamburguerIcon"></div>
        </div>

      </header>
    </Homee>
  );
}
