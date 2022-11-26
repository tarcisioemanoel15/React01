import { VDiV } from "./styled";
import MarcasVida from "../Marcas da Vida - Pr. Lucas (Clipe Oficial MK Music).mp4";
import { useEffect, useRef, useState } from 'react';

function usePlayerState($VideoPlayerRef) {

  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
  });

  useEffect(() => {
    playerState.playing ? $VideoPlayerRef.current.play() : $VideoPlayerRef.current.pause()
  }, [
    $VideoPlayerRef,
    playerState.playing
  ]);

  function toggleVideoPlay() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  function handleTimeUpdate() {
    const currentPercentage = $VideoPlayerRef.current.currentTime / $VideoPlayerRef.current.duration * 100;

    setPlayerState({
      ...playerState,
      percentage: currentPercentage
    })

  }

  function handelVideoPorcentage(event) {
    const currentPorcentageValue = event.target.value;
    $VideoPlayerRef.current.currentTime = $VideoPlayerRef.current.duration / 100 * currentPorcentageValue;
    setPlayerState({
      ...playerState,
      percentage: currentPorcentageValue
    })
  }


  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handelVideoPorcentage,
  }
}




export default function VideoPlayer() {
  const $VideoPlayerRef = useRef(null);
  const { playerState, toggleVideoPlay, handleTimeUpdate, handelVideoPorcentage } = usePlayerState($VideoPlayerRef);


  return (
    <VDiV>
      <div className="videoPlay">
        <h1>Videosssss</h1>

        <video
          ref={$VideoPlayerRef}
          src={MarcasVida}
          poster="./static/Zap.jpg"
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="controls">
          <button onClick={toggleVideoPlay}>
            {playerState.playing ? "Pause" : "Play"}
          </button>
        </div>


        <input
          type="range"
          min="0" max="100"
          onChange={handelVideoPorcentage}
          value={playerState.percentage}
        />

        <select name="" id="">
          {/* Dica playbackRate = 0.5 */}
          {[1, 2, 3].map(speed => (
            <option
              key={`speedChane_${speed}`}
            >
              {speed}

            </option>
          ))}
        </select>

      </div>
    </VDiV>
  );


}