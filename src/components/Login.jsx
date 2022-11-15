import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { KAKAO_AUTH_URL } from "../service/OAuth";

function Login(props) {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    id: "",
    password: "",
  });

  function handleLoginBtn(e) {
    e.preventDefault();

    // axios.post("http://localhost:8080/",loginUser)
    // .then(res => console.log(res))
    // .catch(error => console.log(error));
  }

  function updateLoginUser(e) {
    const { value, name } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
    //console.log(loginUser);
  }

  function kakaoLogin() {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <form className={style.login_form}>
      <div className={style.login}>
        <h2 className={style.login_title}>로그인</h2>
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          onClick={() => props.setLogin(false)}
          className={style.close}
        />
        <input
          type="text"
          className={style.input}
          placeholder="아이디"
          name="id"
          onChange={updateLoginUser}
        />
        <input
          type="password"
          className={style.input}
          placeholder="비밀번호"
          name="password"
          onChange={updateLoginUser}
        />
        <button
          className={style.login_button}
          onClick={(e) => handleLoginBtn(e)}
          disabled={!(loginUser.id && loginUser.password)}
        >
          로그인
        </button>
        <hr className={style.break}></hr>
        <img
          src="img/kakao_login_medium_narrow.png"
          alt="kakao"
          className={style.kakao}
          onClick={kakaoLogin}
        />
        <div className={style.join}>
          <p>아직 회원이 아니신가요? </p>
          <p
            onClick={() => {
              props.setLogin(false);
              navigate("/join");
            }}
            className={style.join_link}
          >
            회원가입
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
