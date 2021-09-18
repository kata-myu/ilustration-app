import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import IlustrationRequest from "../../requests/IlustrationRequest";

// モーダルのスタイルを指定するための変数
const customStyles = {
  overlay: {
    backgroundColor: "rgb(80, 80, 80)",
  },
  content: {
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "20vw",
    marginLeft: "-30vw",
    padding: "2vw 10vw",
  },
};




const ShowModal = (props) => {

  // const [content, setContent] = useState({});

  // useEffect(() => {
  //   setContent(props.contentId)
  // },[content]);

// 　↓ここにif文をいれないといけないっぽい
  // useEffect(async () => {
  //   console.log(props.contentId);
  //   {try{
  //     const content = await IlustrationRequest.get(`/ilustrations/${props.contentId}`);
  //     setContent(content.data);
  //     console.log(content)
  //   }catch(err){
  //     console.log(err);
  //   }}
  //   return () => {setContent({})};
  // }, []);




  // const getContent = async () => {
  //   try{
  //     const content = await IlustrationRequest.get(`/ilustrations/${props.contentId}`);
  //     setContent(content.data);
  //     console.log(content)
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  

  // モーダルを設定するHTMLの要素を指定する
  Modal.setAppElement("#root");
  return(
    <Modal 
      // モーダルの開閉を管理するprops
      isOpen={props.open}
      onRequestClose={props.handleClose}
      // 先ほど定義した、モーダルのスタイルをpropsとして渡す
      style={customStyles}
    >
        <h2 className="title">{props.content.title}</h2>
        <div className="text">
          {props.content.content}
        </div>
    </Modal>
  );
}

export default ShowModal;