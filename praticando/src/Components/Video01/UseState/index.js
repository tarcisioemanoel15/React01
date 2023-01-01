import { useState } from 'react';

export default function UseState() {

  const [playstate, setPlayState] = useState({ playing: false });

  const stateToggel = () => {
    setPlayState({
      ...playstate,
      playing: !playstate.playing
    })

  }

  return { stateToggel, playstate };
}