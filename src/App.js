import './App.css';
import React, {useState} from "react";
import Modal from "./Modal/Modal";
function App() {
    const [modalActive,setModalActive] = useState(false)
  return (
      <div>
          <button className="open-pop-up" onClick={() => setModalActive(true)}>Нажми здесь</button>
          <Modal active={modalActive} setActive={setModalActive}/>
      </div>
  );
}
export default App;
