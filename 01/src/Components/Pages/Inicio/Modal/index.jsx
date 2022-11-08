import { Mmodal } from "./styled";

function Modal({ id = "modal", onClose = () => { }, children }) {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <Mmodal onClick={handleOutsideClick}>
      <div id={id} className="modal" onClick={handleOutsideClick}>

        <div className="container" >
          <button className='close' onClick={onClose}>X</button>
          <div className="content">{children}</div>
        </div>

      </div>
    </Mmodal>
  );
}

export default Modal;