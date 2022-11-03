import { useEffect, useRef, useState } from 'react';
import { Carousell } from "./styled"
import Modal from './Modal';

function Carousel() {
  
  const [data, setData] = useState(null);
  const [modalImg, setModalImg] = useState(false);



  const carouusel = useRef();
  useEffect(() => {
    fetch('http://localhost:3000/static/images/01/tiaras.json')
      .then(response => response.json())
      .then(setData);
  }, []);
  const handleDireitaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft -= carouusel.current.offsetWidth;
  };
  const handleEsquerdaaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft += carouusel.current.offsetWidth;
  };
  if (!data || !data.length) return null;
  return (
    <Carousell>
      <div className="caixa">
        <h1>Tiaras</h1>
        <div className="containerr" ref={carouusel}>
          {data.map((item) => {
            const { id, image, price } = item;
            return (
              <div className="carousel" key={id} >
                <div className="item" >
                  <div className="foto">
                    <img src={image} alt="Tara1" />
                  </div>
                  <h5>R$: {price}</h5>
                  <p>id: {id}</p>
                </div>
              </div>
            );
            
            
            
            
            
            
          })}
            
            
            



        </div>
        <div className="buttons">
          <button onClick={handleDireitaClick}> <img src="./static/images/seta.png" alt="direita" /> </button>
          <button onClick={handleEsquerdaaClick}> <img src="./static/images/seta.png" alt="esquerda" /> </button>
        </div>
          <button onClick={()=>setModalImg(true)}>Open</button>
      </div>




          {modalImg ? (
            <Modal onClose={()=>{setModalImg(false)}}>
            <img src="" alt="" />
            </Modal>
          ) : null}


            


          </Carousell>
  );
}
export default Carousel;