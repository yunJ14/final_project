import axios from "axios";
import React, { useState } from "react";
import style from "./Inquiry.module.css";

const Inquiry = (props) => {

  function saveInquiry(e){
  //   axios.post(`http://localhost:8080/`)
  //   
  }

  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleMain(e) {
    setMain(e.target.value);
    //console.log(title, main);
  }

  return (
    <div className={style.inquiry}>
      <h2>1:1 문의</h2>
      <table className={style.table}>
        <tbody>
        <tr>
          <td className={style.title}>제목</td>
          <td>
            <input
              type="text"
              onChange={(e) => handleTitle(e)}
              placeholder="제목을 입력해주세요."
              className={style.input}
            />
          </td>
        </tr>
        <tr>
          <td className={style.title}>내용</td>
          <td>
            <textarea
              placeholder="문의하고 싶은 내용을 입력해주세요."
              className={style.input}
              id="textarea"
              onChange={(e)=>handleMain(e)}
            ></textarea>
          </td>
        </tr>
        </tbody>
      </table>
      <button onClick={()=>saveInquiry()}className={style.button} disabled={!(title && main)}>문의하기</button>
    </div>
  );
};

export default Inquiry;