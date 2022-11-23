import { VideoPlayer } from "./styled";
import { useRef } from 'react';
export default function UseRefPlayer() {

  const videoRef = useRef();

  const handlePlay = () => { videoRef.current.play(); }
  const handlePause = () => { videoRef.current.pause(); }

  return (
    <VideoPlayer>
      <div className="btnContainer">

        <h1>Video</h1>

        <video ref={videoRef}>
          <source src="./static/Marcas da Vida - Pr. Lucas (Clipe Oficial MK Music).mp4" />
        </video>

        <div className="btn">
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
        </div>

      </div>
    </VideoPlayer>
  );
}
