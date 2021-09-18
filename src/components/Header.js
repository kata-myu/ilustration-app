import React, {useState} from "react";
import NewUser from "./modal/newUser";

const Header = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };


  return(
    <header className="header">
      <h2>Ilustration</h2>
      <div className="right">
        <bottun className="bottun">ログイン</bottun>
        <bottun onClick={handleOpen} className="bottun">新規登録</bottun>
        <bottun className="bottun">Mypage</bottun>
        <bottun className="bottun">ログアウト</bottun>
      </div>
      <NewUser
      handleClose={handleClose}
      open={openModal}
      />
    </header>
  );
};

export default Header;