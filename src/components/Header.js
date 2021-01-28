import React from "react";

const Header = () => {
  return(
    <header className="header">
      <h2>Ilustration</h2>
      <div className="right">
        <bottun className="bottun">ログイン</bottun>
        <bottun className="bottun">New</bottun>
        <bottun className="bottun">Mypage</bottun>
      </div>
    </header>
  );
};

export default Header;