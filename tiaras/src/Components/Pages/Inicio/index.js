import { FundoImg } from "./styled";
import Tiara1 from "../img/1px200.png";
import Tiara2 from "../img/2px200.png";
import Tiara3 from "../img/3px200.png";




export default function Inicio() {
  return (
    <div className="inicio">


      <FundoImg>

        <article>

          <div>
            <h6>ID: 1</h6>
            <img src={Tiara1} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div>
            <h6>ID: 2</h6>
            <img src={Tiara2} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div>
            <h6>ID: 3</h6>
            <img src={Tiara3} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>

        </article>

      </FundoImg>

    </div >
  );

}