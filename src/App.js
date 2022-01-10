import './App.css';
import React, {useState} from "react";
import Modal from "./Modal/Modal";
import Slider from "./Slider/Slider";
function App() {
    const [modalActive,setModalActive] = useState(false)
  return (
      <div>
          <button className="open-pop-up" onClick={() => setModalActive(true)}>Нажми здесь</button>
          <Modal active={modalActive} setActive={setModalActive}/>
          <Slider/>
      </div>
  );
}

export default App;
