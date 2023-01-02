import { Main } from './styled.js';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Objeto() {
  const [imge, setImg] = useState([]);

  useEffect(() => {
    fetch('./static/json.json')
      .then(r => r.json())
      .then(setImg)
  }, []);

  return (
    <Main>

      <div className="containerObj">
        <h1>MAP</h1>
        <div className="carousel">

          {
            imge.map(function (v, i) {
              const noviIndice = { ...v };
              const ind = noviIndice.idi = i;

              return (

                <div className="container" key={ind}>


                  <div className="images">
                    <h1>{ind}</h1>
                    <img src={v.img} alt='as' />
                  </div>


                </div>
              )
            })
          }
        </div>
      </div>
    </Main>
  )
}