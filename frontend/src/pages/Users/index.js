import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiFilter, FiMoreHorizontal, FiSearch } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/img/logo.png";

import "./style.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  const history = useHistory();

  const name = localStorage.getItem("nameApi");

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");

      setUsers(response.data);
    }
    loadUsers();
  }, []);

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="users-container">
      <header>
        <img src={logoImg} alt="Simple API" />

        <span>
          Olá, <b>{name}</b>!
        </span>

        <div className="group-button">
          <button className="button">
            <FiFilter size={14} />
          </button>

          <button className="button" onClick={handleLogout}>
            <FiPower />
          </button>
        </div>
      </header>

      <div className="search">
        <input type="text" name="search" id="search" />
        <button type="submit">
          <FiSearch />
        </button>
      </div>

      <main>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link className="link">
                <strong>{user.name}</strong>
              </Link>

              <p>
                Work at <b>{user.company}</b>
              </p>

              <button type="button">
                <FiMoreHorizontal size={18} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
