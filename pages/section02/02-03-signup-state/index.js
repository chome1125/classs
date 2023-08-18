import { useState } from "react";

export default function SignUpStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value); //input에 입력된
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignUp() {
    console.log(email);
    console.log(password);

    //검증하는 방법
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다. @가 없습니다");
    } else {
      //메세지 알림 이후, 백엔드 컴퓨터에있는 api(함수) 요청
      alert("회원가입을 축하합니다");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div id="error">{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
