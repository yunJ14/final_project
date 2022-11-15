//Loading Component
//불필요시 다시 Kakao Component 안으로 넣기

import React from "react";
import style from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={style.container}>
      <div className={style.loading}></div>
      <div className={style.loading_text}>Loading</div>
    </div>
  );
};

export default Spinner;
