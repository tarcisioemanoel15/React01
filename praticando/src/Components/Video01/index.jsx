import { DivVideos } from "./styled";
import Videov from "../Marcas da Vida - Pr. Lucas (Clipe Oficial MK Music).mp4";
import { useState } from 'react';


export default function Videos01() {

  const [playstate, setPlayState] = useState({ playing: false });

  const stateToggel = () => {
    setPlayState({
      ...playstate,
      playing: !playstate.playing
    })

  }

  return (

    <DivVideos>

      <div className="videos001">
        <h1>Videos01</h1>

        <video src={Videov} />

        <div className="playVideo">

          <button onClick={stateToggel}>

            {playstate.playing ? "Play" : "Pause"}

          </button>
        </div>



      </div>

    </DivVideos>


  );
}