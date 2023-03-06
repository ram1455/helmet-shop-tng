import Footer from "./components/footer/Footer";
import React from 'react'
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./style-app.css";
import MyVerticallyCenteredModal from "./components/modalBox/ModalBox";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const clicked = () => setModalShow(true)

  // function test () {
  //   setModalShow(true)
  // }
  

  return (
    <div className="App">
      <Navbar/>
      <Main click={clicked}/>
      <Footer/>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
