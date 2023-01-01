import { DivVideos } from "./styled";
import Videov from "../Marcas da Vida - Pr. Lucas (Clipe Oficial MK Music).mp4";
import Button from './Button';
import UseState from "./UseState";
import { useEffect, useRef } from 'react';

export default function Videos01() {
  const { stateToggel, playstate } = UseState();
  const playRef = useRef(null);

  useEffect(() => {
    playstate.playing ? playRef.current.play() : playRef.current.pause();
  }, [
    playRef,
    playstate
  ]);

  return (
    <DivVideos>

      <div className="videos001">
        <h1>Videos01</h1>

        <video ref={playRef} src={Videov} />

        <div className="playVideo">
          <Button
            onClick={stateToggel}
            play={playstate.playing}
          />
        </div>
      </div>

    </DivVideos>


  );
}