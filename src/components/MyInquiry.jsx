import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./MyInquiry.module.css";
import MyInquiryList from "./MyInquiryList";

function MyInquiry(props) {
  
  const [myInquiry, setMyInquiry] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/inquiry/${id}`)
  //     .then((res) => setMyInquiry(res.data))
  //     .catch((error) => console.log(error));
  // }, []);

  let navigate = useNavigate();

  return (
    <div className={style.inquiry}>
      <h2>1:1 문의</h2>
      <table className={style.table}>
        <thead className={style.header}>
          <tr>
            <td className={style.number}>번호</td>
            <td className={style.title}>제목</td>
            <td className={style.date}>작성일</td>
          </tr>
        </thead>
        {<MyInquiryList myInquiry={myInquiry}/>}
      </table>
      <button
        className={style.inquiryBtn}
        onClick={() => {
          navigate("/inquiry");
        }}
      >
        문의 남기기
      </button>
    </div>
  );
}

export default MyInquiry;
