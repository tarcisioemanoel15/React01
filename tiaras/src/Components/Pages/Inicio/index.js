import { FundoImg } from "./styled";
import Tiara1 from "../img/1px200.png";
import Tiara2 from "../img/2px200.png";
import Tiara3 from "../img/3px200.png";


// import Tiara01 from "../img/1px600.png";
// import Tiara02 from "../img/2px600.png";
import Tiara03 from "../img/3px600.png";




import { useState } from 'react';
import Modal from "./Modal";



export default function Inicio() {

  // const slectImg = (e) => {
  //   if (e.className.container('id1')) {
  //     <img src={Tiara01} alt="erroTiara" />
  //   }

  //   if (e.className.container('id1')) {
  //     <img src={Tiara02} alt="erroTiara" />
  //   }

  //   if (e.className.contains('id3')) {
  //     <img src={Tiara03} alt="erroTiara" />
  //   }

  // }

  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <div className="inicio">


      <FundoImg>

        <article>

          <div className='id1'>
            <h6>ID: 1</h6>
            <img src={Tiara1} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div className='id2'>
            <h6>ID: 2</h6>
            <img src={Tiara2} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div className='id3' onClick={() => setModalVisible(true)}>
            <h6>ID: 3</h6>
            <img src={Tiara3} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>

        </article>


        {isModalVisible ? (
          <Modal onClose={() => { setModalVisible(false) }}>

            {/* {slectImg} */}

            <img src={Tiara03} alt="erroTiara" />
          </Modal>
        ) : null}

      </FundoImg>

    </div >
  );

}