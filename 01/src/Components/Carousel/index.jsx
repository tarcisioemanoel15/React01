import { useEffect, useRef, useState } from 'react';
import { Carousell } from "./styled";

function Carousel() {
  const [data, setData] = useState(null);

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
                  <div className="foto" >
                    {/* <a href={imageM}> */}
                    <img src={image} alt="Tara1" />
                    {/* </a> */}

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


      </div>


    </Carousell>
  );
}
export default Carousel;