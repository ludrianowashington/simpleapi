import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/img/logo.png";

import "./style.css";

export default function DetailPost() {
  const [post, setPost] = useState([]);

  const history = useHistory();
  const name = localStorage.getItem("nameApi");

  const { id } = useParams();
  useEffect(() => {
    async function loadPost() {
      const response = await api.get(`/posts/${id}`);

      setPost(response.data);
    }

    loadPost();
  }, [id]);

  function handleClick() {
    history.goBack();
  }
  return (
    <div className="detail-container">
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

      <div className="search">
        <input type="text" name="search" id="search" />
        <button type="submit">
          <FiSearch />
        </button>
      </div>

      <main>
        <div className="post">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br />
          <p>
            Posted at <Link to={`/users/${post.userId}`}>{post.author}</Link> of
            the company <b>{post.company}</b>
          </p>
        </div>
      </main>
    </div>
  );
}
