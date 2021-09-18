import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Title from "../components/contents/Title";
import Text from "../components/contents/Text";
import Reaction from "../components/contents/Reaction";
import IlustrationRequest from "../requests/IlustrationRequest";
import Ilustration from "../components/Ilustration";
import {DataContext} from "../components/Ilustration";
import {Link} from "react-router-dom";
import "../Content.css";

const Content = (props) => {
  
 

  // const { contentId } = useContext(DataContext)

  

  return (
    <div className="app">
      <Header />
      <Title />
      <Text />
      <Reaction />
      <Link to="/">
        Homeへ戻る
      </Link>
    </div>
  );
}

export default Content;