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
    <div className="containerObj">
      <h1>OI</h1>





      {
        imge.map(r => {
          const { img, id } = r;
          return (
            <div className="container" key={id}>


              <img src={img} alt='as' />
              <h1>{id}</h1>
            </div>
          )
        })
      }
    </div>
  )

}