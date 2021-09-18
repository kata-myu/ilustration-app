import React, {useState, useCallback} from "react";
import IlustrationRequest from "../../requests/IlustrationRequest";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./textInput";


const NewIlustration = (props) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  
  
  const inputTitle = useCallback((event) => {
    setTitle(event.target.value)
  },[setTitle]);
  
  const inputContent = useCallback((event) => {
    setContent(event.target.value)
  },[setContent]);
  
  const inputImage = useCallback((event) => {
    setImage(event.target.value)
  },[setImage]);


  // if (document.getElementById("fileInput")) {
  //   document.getElementById("fileInput").addEventListener("change", (e) =>{
  //     setImage(e.target.files[0]);
  //     console.log(e.target.files[0]);
  //   });
  // };
  

  const submitForm = async () => {
    try{
      const ilustrationData = {title: title, content: content, image: image};
      const ilustration = await IlustrationRequest.post("/ilustrations", ilustrationData);
      console.log(ilustration)
      setTitle("")
      setContent("")
      setImage({})
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };

  return(
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">新規投稿</DialogTitle>
      <DialogContent>
        <TextInput
          label={"タイトル(必須)"} multiline={false} rows={1}
          value={title} type={"text"} onChange={inputTitle}
        />
        <TextInput
          label={"お話(必須)"} multiline={false} rows={10}
          value={content} type={"text"} onChange={inputContent}
        />
        <input type="file" id="fileInput" onChange={inputImage} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitForm} color="primary">
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  )
};

export default NewIlustration;