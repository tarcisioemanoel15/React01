import { useState } from 'react';
export const Contador = () => {
  const [couter, setCouter] = useState(0);

  setTimeout(() => {
    setCouter(couter + 1)
    if (couter === 29) { setCouter(0) }
  }, 2500);

  return (
    <div className="containerContador" >

      <h1>ConTador</h1>
      <h6>{couter}</h6>
      <img src={`./static/px200/${couter}.jpg`} alt="aaaa" />
      <p>Resolver error de arquivo de imagem jpeg e jpg dinamico</p>

    </div >
  )
}