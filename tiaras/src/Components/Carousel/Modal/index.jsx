import { ModalDiv } from "./styled";

export default function Modal({id='modal', onClose=()=>{ }, children}) {
  
  const henFechar = (e) => {
    if(e.target.id === id) onClose()
  }
  
  return(
    <ModalDiv>
      <div id={id} className="modal" onClick={henFechar}>

        <div className="container">

            <button onClick={onClose}>x</button>
            <div className="modalImg">{children}</div>
        </div>

      </div>
    </ModalDiv>

  );
}