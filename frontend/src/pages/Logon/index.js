import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logoImg from "../../assets/img/logo.png";
import logonImg from "../../assets/img/office.svg";

import "./style.css";

export default function Logon() {
  const [name, setName] = useState("");

  const history = useHistory();

  function handleLogon(e) {
    e.preventDefault();

    if (name === "" && localStorage.getItem("nameApi") === null) {
      alert("Por favor, preencha o campo vazio!");
    } else if (name === "" && localStorage.getItem("nameApi") !== null) {
      history.push("/posts");
    } else {
      localStorage.setItem("nameApi", name);

      history.push("/posts");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="simple api" />

        <form onSubmit={handleLogon}>
          <h1>Seja bem-vindo</h1>

          <input
            placeholder="Nome ou Empresa"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>

      <img src={logonImg} alt="logonImg" />
    </div>
  );
}
