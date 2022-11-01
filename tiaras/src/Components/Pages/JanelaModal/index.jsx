import { useState } from 'react';
import { Div } from "./styled";
import Modal1 from "./Modal1";

export default function JanelaModal() {

  const [isModalVisible, setModalVisible] = useState(false)

  return(

    <Div>
      <div className="App">


    <button onClick={() => setModalVisible(true)}>
      Open
    </button>
      
      {isModalVisible ? <Modal1/> : null} 


      </div>
    
    </Div>
  );
}