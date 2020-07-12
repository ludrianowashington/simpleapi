import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiFilter, FiMoreHorizontal, FiSearch } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/img/logo.png";

import "./style.css";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  const history = useHistory();

  const name = localStorage.getItem("nameApi");

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get("/posts");

      setPosts(response.data);
    }
    loadPosts();
  }, []);

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="posts-container">
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
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="link" to={`/posts/${post.id}`}>
                <strong>{post.title}</strong>
              </Link>

              <p>
                Posted at <b>{post.author}</b>
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
