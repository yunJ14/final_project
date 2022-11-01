import React, { useState } from "react";
import style from "./Join.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//npm install react-router-dom
//npm install axios

function Join() {
  const [user, setUser] = useState({
    id: "",
    password: "",
    email: "",
  });
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  let navigate = useNavigate();

  function updateUser(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  //버튼 누르면 서버로 회원정보 전송
  function handleJoinBtn(e) {
    e.preventDefault();
    // try {
    //   axios.post('', user)
    // .then((response) => console.log(response))
    // .then(alert("회원가입에 성공했습니다!"))
    // .then(window.location.replace('/'))
    // } catch (error){
    //   console.log(error + "실패!");
    // };
    console.log(user);
  }

  //id 유효성 체크 - 필수
  function checkId(e) {
    e.target.value == "" ? setIdCheck(true) : setIdCheck(false);
    return !idCheck;
  }

  //pw 유효성 체크 - 필수, 8~16자리 영문,숫자,특수문자
  function checkPassword(e) {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    setPwCheck(!pwRegex.test(e.target.value));
    return pwRegex.test(e.target.value);
  }

  //email 유효성 체크 - 필수, 이메일 형식
  function checkEmail(e) {
    const emailRegex =
      /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmailCheck(!emailRegex.test(e.target.value));
    //if (e.target.value == "") setEmailCheck(false);
    return emailRegex.test(e.target.value);
  }

  return (
    <form className={style.join_form}>
      <h2 className={style.join_title}>회원가입</h2>
      <div className={style.join}>
        <div className={style.item}>
          <p className={style.label}>아이디</p>
          {idCheck && <p className={style.warning}>아이디를 입력해주세요!</p>}
          <input
            onChange={(e) => checkId(e) && updateUser(e)}
            type="text"
            name="id"
            placeholder="아이디를 입력하세요."
            className={style.input}
          />
        </div>
        <div className={style.item}>
          <p className={style.label}>비밀번호</p>
          {pwCheck && (
            <p className={style.warning}>
              영어, 숫자, 특수문자를 조합하여 8~16자로 작성해주세요!
            </p>
          )}
          <input
            className={style.input}
            onChange={(e) => checkPassword(e) && updateUser(e)}
            type="password"
            name="password"
            placeholder="영어, 숫자, 특수문자로 8~16자"
          />
        </div>
        <div className={style.item}>
          <p className={style.label}>이메일</p>
          {emailCheck && (
            <p className={style.warning}>이메일을 다시 확인해주세요!</p>
          )}
          <input
            className={style.input}
            type="email"
            onChange={(e) => {
              checkEmail(e) && updateUser(e);
            }}
            name="email"
            placeholder="art@market.com"
          />
        </div>
        <button
          className={style.button}
          type="submit"
          onClick={(e) => handleJoinBtn(e)}
          disabled={
            !(
              user.id &&
              !idCheck &&
              user.password &&
              !pwCheck &&
              user.email &&
              !emailCheck
            )
          }
        >
          완료
        </button>
      </div>
    </form>
  );
}

export default Join;
