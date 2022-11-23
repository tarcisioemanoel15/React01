// https://kitsu.io/api/edge/anime?filter[text]=${text}&/page[limit]=12

import './App.css';
import UseRefPlayer from './Components/UseRefPlayer';

function App() {

  return (

    <div className="container">
      <UseRefPlayer />
    </div>

  );

}
export default App;