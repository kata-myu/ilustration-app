import React, {useState, useEffect} from "react";
import Ilustration from "./Ilustration";
import IlustrationRequest from "../requests/IlustrationRequest";

const Main = () => {

  const [resources, setResources] = useState([]);

  useEffect(async () => {
    try{
      const ilustrations = await IlustrationRequest.get("/ilustrations");
      setResources(ilustrations.data);
      console.log(resources)
    }catch(err){
      console.log(err);
    }
  },[]);

  
  return(
    <div className="main">
      <div className="ilustration-wrapper">
        <Ilustration resources={resources} />
      </div>
    </div>
  );
};

export default Main;