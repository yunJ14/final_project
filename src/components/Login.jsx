import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

function Login(props) {
  const navigate = useNavigate();

  function handleLoginBtn(e) {
    e.preventDefault();

    //임시 (아이디 비교 예정)
    // axios.get('')
    // .then(response => response.json())
    // .then(data => console.log(data));
  }

  //임시로 로그인 클릭시 창 꺼지도록
  return (
    <form className={style.login_form}>
      <div className={style.login}>
        <h1
          onClick={() => {
            props.setLogin(false);
          }}
        >
          로그인
        </h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button onClick={(e) => handleLoginBtn(e)}>로그인</button>
        <hr />
        <img
          src="img/kakao_login_medium_narrow.png"
          alt="kakao login"
          onClick={(e) => handleLoginBtn(e)}
        />
        <p>아직 회원이 아니신가요?</p>
        <p onClick={() => navigate("/join")}>회원가입 하러가기</p>
      </div>
    </form>
  );
}

export default Login;
