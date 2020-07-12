import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Post from "./pages/DetailPost";
import User from "./pages/DetailUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/users/:id" component={User} />

        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}
