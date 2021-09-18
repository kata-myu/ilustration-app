import React, {useState, useEffect} from "react";
import IlustrationRequest from "../requests/IlustrationRequest";
import {Link} from "react-router-dom";
import Content from "../pages/Content";
import GetId from "../hooks/GetId";
import ShowModal from "./modal/modalShow";
import SelectInput from "@material-ui/core/Select/SelectInput";

const Ilustration = ({resources}) => {

  // const getId = (contentId) => {
  //   return(
  //     <div>
  //       <Content contentId={contentId} />
  //     </div>
  //   );
  // };

  // export const DataContext = React.createContext(0)

  
  const [idModal, setIdModal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState({});

  const handleOpen = (contentId) => {
    console.log(contentId);
    setIdModal(contentId);
    console.log(idModal);
    setOpenModal(true);
    console.log(openModal);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(async () => {
    console.log(idModal);
    {try{
      const content = await IlustrationRequest.get(`/ilustrations/${idModal}`);
      setContent(content.data);
      console.log(content)
    }catch(err){
      console.log(err);
    }}
    return () => {setContent({})};
  }, [idModal]);


  

  // const idOpen = (contentId) => {
  //   setIdModal(contentId)
  // };

  return(
    <React.Fragment>
      {resources.map((resource, index) => (
        // <DataContext.Provider value={resource.id}>
        <div className="ilustration" >
          {/* <Link to="/content"> */}
            <img src="https://tech-master.s3.amazonaws.com/uploads/curriculums/images/Rails1-4/sample.jpg" alt="イメージ画像" className="image" onClick={()=>handleOpen(resource.id)} />
            <p key={index}>{resource.title}</p>
          {/* </Link> */}
          <p>byニックネーム</p>
        </div>
        // </DataContext.Provider>
      ))};
        <ShowModal
          handleClose={handleClose}
          open={openModal}
          contentId={idModal}
          content={content}
        />
    </React.Fragment>
  );
};

export default Ilustration;

