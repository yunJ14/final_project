import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInquiry from "./MyInquiry";
import style from "./Mypage.module.css";

function Mypage(props) {
  const [pw, setPW] = useState("");
  const [email, setEmail] = useState("");
  const [pwUpCheck, setPwUpCheck] = useState(false);
  const [emailUpCheck, setEmailUpCheck] = useState(false);

  function checkUpdateUser(e) {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const emailRegex =
      /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    setPwUpCheck(!pwRegex.test(pw));
    setEmailUpCheck(!emailRegex.test(email));

    return pwRegex.test(pw) && emailRegex.test(email);
  }

  function updateUser(e) {
    let user = {
      // id : "",
      password : pw,
      email : email,
    }

    // axios.put(`http://localhost:8080/user`)
  }

  let navigate = useNavigate();

  return (
    <div className={style.mypage}>
      <h2>회원정보 수정</h2>
      <div className={style.item}>
        <p className={style.title}>아이디</p>
        <input type="text" value="id" disabled className={style.input} />
        <p className={style.title}>비밀번호</p>
        {pwUpCheck && (
          <p className={style.warning}>
            영어, 숫자, 특수문자를 조합하여 8~16자로 작성해주세요!
          </p>
        )}
        <input
          type="password"
          className={style.input}
          placeholder="수정할 비밀번호를 입력해주세요."
          onChange={(e) => setPW(e.target.value)}
        />
        <p className={style.title}>이메일</p>
        {emailUpCheck && (
          <p className={style.warning}>이메일을 다시 확인해주세요!</p>
        )}
        <input
          type="email"
          className={style.input}
          placeholder="수정할 이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className={style.button}
        disabled={!(pw && email)}
        onClick={(e) => {
          checkUpdateUser(e) && updateUser(e);
        }}
      >
        수정하기
      </button>
      <hr className={style.hr}></hr>
      <MyInquiry />
    </div>
  );
}

export default Mypage;
