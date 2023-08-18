import { useState } from "react";

export default function SignupFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function EmailInput(event) {
    setEmail(event.target.value);
  }

  function PasswordInput(event) {
    setPassword(event.target.value);
  }

  function Signup() {
    if (
      email.includes("@") === false ||
      password.length < 4 ||
      password.length > 20
    ) {
      setErrorMessage(
        "이메일에 @가 없거나,비밀번호가 4자 미만 혹은 20자 초과입니다."
      );
    } else {
      alert("가입을 환영합니다.");
    }
  }
  return (
    <>
      이메일 : <input type="text" onChange={EmailInput} />
      <div id="error">{errorMessage}</div>
      비밀번호 : <input type="password" onChange={PasswordInput} />
      <button onClick={Signup}>회원가입</button>
    </>
  );
}
