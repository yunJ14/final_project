import axios from "axios";
import React, { useState } from "react";
import style from "./Inquiry.module.css";

const InquiryModify = (props) => {
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  const [file, setFile] = useState("");

  const saveRewriteInquiry = async (e) => {
    axios.put();
  };

  const handleFile = (e) => {
    //형식자 제한 필요할 경우
    //let fileRegex = new RegExp("(.*?)\.(gif|jpeg|jpg|png)$");
    // e.target.files[0] && console.log(fileRegex.test(e.target.files[0].name));
    setFile(e.target.files[0]);
  };

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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setMain(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="file" accept="image/*" onChange={handleFile} />
              <p className={style.fileInfo}>파일 첨부 시 이미지 파일만 가능합니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => saveRewriteInquiry()}
        className={style.button}
        disabled={!(title && main)}
      >
        문의하기
      </button>
    </div>
  );
};

export default InquiryModify;
