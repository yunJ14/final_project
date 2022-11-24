import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InquiryModify from "./InquiryModify";
import style from "./MyInquiryList.module.css";

function MyInquiryList(props) {
  const [content, setContent] = useState(false);

  let navigate = useNavigate();

  function showContent() {
    setContent(!content);
  }

  function deleteContent() {
    // axios.delete(`http://localhost:8080/api/inquiry/delete/${id}`)
    // .then(alert("삭제가 완료되었습니다."))
    // .catch(error => console.log(error));
  }

  function modifyContent() {
    navigate("/inquiry/modify");
    // if(props.myInquiry.file){
    //   axios.put(`http://localhost:8080/api/inquiry/update/${id}`)
    // }
  }

  // const showImage = () => {
  //   axios.get(`http://localhost:8080/img/display?fileSource=${경로}`)
  // }

  return (
    <tbody className={style.tbody}>
      {props.myInquiry && <div>문의가 있어요</div>}
      <tr onClick={showContent}>
        <td className={style.num}>1</td>
        <td className={style.title}>교환하고 싶어요!</td>
        <td className={style.date}>2022.11.12</td>
      </tr>
      {content && (
        <tr>
          <td colSpan="3" className={style.content}>
            안녕하세요 저는 교환을 하고 싶은데요. 어떻게 해야 할까요?
            <div className={style.buttons}>
              <button
                className={style.modify}
                onClick={() => {
                  modifyContent();
                }}
              >
                수정
              </button>
              <button
                className={style.delete}
                onClick={() => {
                  deleteContent();
                }}
              >
                삭제
              </button>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default MyInquiryList;
