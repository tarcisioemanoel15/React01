// https://kitsu.io/api/edge/anime?filter[text]=${text}&/page[limit]=12

import './App.css';
import UseRefPlayer from './Components/UseRefPlayer';
import Objeto from "./Components/Objeto";
import Videos01 from './Components/Video01';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// import VideoYoutube from './Components/VideoYoutube';

function App() {

  return (

    <div className="container">
      <Objeto />
      <Videos01 />
      {/* <VideoYoutube /> */}
      <VideoPlayer />
      <UseRefPlayer />
    </div>

  );

}
export default App;