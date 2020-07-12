import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/img/logo.png";

export default function DetailUser() {
  const [user, setUser] = useState([]);

  const name = localStorage.getItem("nameApi");

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }
  return (
    <div className="user-container">
      <header>
        <div className="group-button">
          <button className="button" onClick={handleClick}>
            <FiArrowLeft size={18} />
          </button>
        </div>
        <img src={logoImg} alt="Simple API" />

        <span>
          Olá, <b>{name}</b>!
        </span>
      </header>

      <div className="user-main">
        <aside></aside>
        <main></main>
      </div>
    </div>
  );
}
