import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome,
  FiMail,
  FiMap,
  FiPhone,
  FiBriefcase,
} from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/img/logo.png";
import userImg from "../../assets/img/user.svg";

import "./style.css";

export default function DetailUser() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const history = useHistory();
  const name = localStorage.getItem("nameApi");

  const { userId } = useParams();
  console.log(user.post);
  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);

      setPosts(response.data.posts);
    }

    loadUser();
  }, [userId]);
  function backHome() {
    history.push("/posts");
  }

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

          <button className="button" onClick={backHome}>
            <FiHome size={18} />
          </button>
        </div>
        <img src={logoImg} alt="Simple API" />

        <span>
          Olá, <b>{name}</b>!
        </span>
      </header>

      <div className="user-main">
        <aside>
          <strong>Profile</strong>
          <br />
          <img src={userImg} alt="userImg" />

          <h1>{user.name}</h1>
          <p>@{user.username}</p>
          <br />
          <p>
            <FiMail /> {user.email}
          </p>
          <address>
            <FiMap /> {user.address}
          </address>
          <p>
            <FiPhone /> {user.phone}
          </p>
          <p>
            <FiBriefcase /> {user.company}
          </p>
        </aside>
        <main>
          <h2>Users posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
