import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Kakao = (props) => {
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    // axios
    //   .post("http://localhost:8080/auth/kakao/login", code)
    //   .then((res) => {
    //     console.log(res.data);
        // let accessToken = res.data.accessToken;
        // let refreshToken = res.headers["refresh-token"];
        // localStorage.setItem("AC_Token", accessToken);
        // localStorage.setItem("RF_Token", refreshToken);
      // })
      // .then(alert("로그인 완료"))
      // .then(window.location.replace("/"))
      // .catch(console.log);
  }, []);

  return <Spinner />;
};

export default Kakao;
