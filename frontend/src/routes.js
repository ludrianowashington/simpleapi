import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}
