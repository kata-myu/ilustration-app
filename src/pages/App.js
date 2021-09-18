import React, {useState} from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import NewIlustration from "../components/modal/newIlustration";
import NewUser from "../components/modal/newUser";
import "../App.css";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalIlustration, setOpenModalIlustration] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenIlustration = () => {
    setOpenModalIlustration(true);
  };

  const handleCloseIlustration = () => {
    setOpenModalIlustration(false);
  };



  return (
    <div className="app">
      <Header />
      <NewUser
        handleClose={handleClose}
        open={openModal}
      />
      <div onClick={handleOpenIlustration}>投稿する</div>
      <NewIlustration
        handleClose={handleCloseIlustration}
        open={openModalIlustration}
      />
      <Main />
    </div>
  );
}

export default App;
