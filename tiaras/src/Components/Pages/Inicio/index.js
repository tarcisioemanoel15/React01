import { FundoImg } from "./styled";
import Tiara1 from "../img/1px200.png";
import Tiara2 from "../img/2px200.png";
import Tiara3 from "../img/3px200.png";

import Tiara01 from "../img/1px600.png";
import Tiara02 from "../img/2px600.png";
import Tiara03 from "../img/3px600.png";

import { useState } from 'react';
import Modal from "./Modal";

export default function Inicio() {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  return (
    <div className="inicio" >
      <FundoImg>

        <div className="title">
          <h1>Andressa Bispo</h1>
        </div>

        <article >

          <div onClick={() => setModalVisible(true)}>
            <h6>ID: 1</h6>
            <img src={Tiara1} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>

          <div onClick={() => setModalVisible1(true)}>
            <h6>ID: 2</h6>
            <img src={Tiara2} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>

          <div onClick={() => setModalVisible2(true)} >
            <h6>ID: 3</h6>
            <img src={Tiara3} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>

        </article>




        {isModalVisible ? (
          <Modal onClose={() => { setModalVisible(false) }}>
            <img src={Tiara01} alt="erroTiara" />
          </Modal>
        ) : null}

        {isModalVisible1 ? (
          <Modal onClose={() => { setModalVisible1(false) }}>
            <img src={Tiara02} alt="erroTiara" />
          </Modal>
        ) : null}




        {isModalVisible2 ? (
          <Modal onClose={() => { setModalVisible2(false) }}>
            <img src={Tiara03} alt="erroTiara" />
          </Modal>
        ) : null}





      </FundoImg>

    </div >
  );

}