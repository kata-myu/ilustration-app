import React, {useState, useCallback} from "react";
import IlustrationRequest from "../../requests/IlustrationRequest";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./textInput";


const NewUser = (props) => {

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  

  

  const inputNickname = useCallback((event) => {
    setNickname(event.target.value)
    console.log(nickname);
  },[setNickname]);
  
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  },[setPassword]);
  
  const inputPasswordConfirmation = useCallback((event) => {
      setPasswordConfirmation(event.target.value)
  },[setPasswordConfirmation]);

  const submitForm = async () => {
    try{
      const userData = {user: {password: password, password_confirmation: passwordConfirmation, email: email, nickname: nickname}};
      const user = await IlustrationRequest.post("/users", userData);
      console.log(user)
      setPassword("")
      setPasswordConfirmation("")
      setEmail("")
      setNickname("")
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
      <DialogTitle id="alert-dialog-title">新規登録</DialogTitle>
      <DialogContent>
        <TextInput
          label={"password(必須)"} multiline={false} rows={1}
          value={password} type={"password"} onChange={inputPassword}
        />
        <TextInput
          label={"password確認(必須)"} multiline={false} rows={1}
          value={passwordConfirmation} type={"password"} onChange={inputPasswordConfirmation}
        />
        <TextInput
          label={"メールアドレス(必須)"} multiline={false} rows={1}
          value={email} type={"email"} onChange={inputEmail}
        />
        <TextInput
          label={"ニックネーム(必須)"} multiline={true} rows={1}
          value={nickname} type={"text"} onChange={inputNickname}
        />
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

export default NewUser;



// import React, {useState, useCallback} from "react";
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import TextInput from "./textInput";


// const NewUser = (props) => {

//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     const [email, setEmail] = useState("");
//     const [nickname, setNickname] = useState("");

    

//     const inputNickname = useCallback((event) => {
//       setNickname(event.target.value)
//     },[setNickname]);
    
//     const inputEmail = useCallback((event) => {
//       setEmail(event.target.value)
//     },[setEmail]);

//     const inputPassword = useCallback((event) => {
//       setPassword(event.target.value)
//     },[setPassword]);
    
//     const inputPasswordConfirmation = useCallback((event) => {
//         setPasswordConfirmation(event.target.value)
//     },[setPasswordConfirmation]);

//   const submitForm = () => {
    
//     const payload = {user: {
//       password: password,
//       password_confirmation: passwordConfirmation,
//       email: email,
//       nickname: nickname
//     }}
//     console.log(payload);

//     const url = "http://localhost:3000/users"

//     fetch(url, {
//       method: 'POST',
//       mode: 'cors',
//       credentials: 'include',
//       body: JSON.stringify(payload)
//     }).then(() => {
//       alert('登録が完了しました！')

      // setPassword("")
      // setPasswordConfirmation("")
      // setEmail("")
      // setNickname("")
      // return props.handleClose()
//     })
//   }

//   return(
//     <Dialog
//       open={props.open}
//       onClose={props.handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title">新規登録</DialogTitle>
//       <DialogContent>
//         <TextInput
//           label={"password(必須)"} multiline={false} rows={1}
//           value={password} type={"password"} onChange={inputPassword}
//         />
//         <TextInput
//           label={"password確認(必須)"} multiline={false} rows={1}
//           value={passwordConfirmation} type={"password"} onChange={inputPasswordConfirmation}
//         />
//         <TextInput
//           label={"メールアドレス(必須)"} multiline={false} rows={1}
//           value={email} type={"email"} onChange={inputEmail}
//         />
//         <TextInput
//           label={"ニックネーム(必須)"} multiline={true} rows={1}
//           value={nickname} type={"text"} onChange={inputNickname}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={props.handleClose} color="primary">
//           キャンセル
//         </Button>
//         <Button onClick={submitForm} color="primary">
//           送信する
//         </Button>
//       </DialogActions>
//     </Dialog>
//   )
// }

// export default NewUser;



// import React from "react";
// import Modal from "react-modal";

// // モーダルのスタイルを指定するための変数
// const customStyles = {
//   overlay: {
//     backgroundColor: "rgb(80, 80, 80)",
//   },
//   content: {
//     top: "10%",
//     left: "60%",
//     right: "50%",
//     height: "75vh",
//     width: "20vw",
//     marginLeft: "-30vw",
//     padding: "2vw 10vw",
//   },
// };


// const NewUser = (props) => {
//   // モーダルを設定するHTMLの要素を指定する
//   Modal.setAppElement("#root");
//   return(
//     <Modal 
//       // モーダルの開閉を管理するprops
//       isOpen={props.open}
//       onRequestClose={props.handleClose}
//       // 先ほど定義した、モーダルのスタイルをpropsとして渡す
//       style={customStyles}
//     >
//       <form className="flex direction_column horizontal_center vertical_center">
//         <h2 className="input_menu">新規登録</h2>
//         <div>
//           <h4 className="input_title">メールアドレス</h4>
//           <input type="email" />
//           <h4 className="input_title">password設定</h4>
//           <input type="password" />
//           <h4 className="input_title">password再入力</h4>
//           <input type="password" />
//           <h4 className="input_title">ニックネーム</h4>
//           <input type="text" />
//         </div>
//         <input className="input_submit" type="button" value="送信" />
//       </form>
//     </Modal>
//   );
// }

// export default NewUser;