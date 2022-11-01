import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Main.js";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Store from "./routes/Store";
import Join from "./components/Join";
import Login from "./components/Login";
import { useState } from "react";

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install react-router-dom
// npm install axios

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        로그인테스트
      </button>
      {login && <Login login={login} setLogin={setLogin}/>}
      <Footer />
    </div>
  );
}

export default App;
