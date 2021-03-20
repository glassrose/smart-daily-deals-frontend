import React from "react";
import ActiveDeals from './ActiveDeals'
import SockJS from 'sockjs-client'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from "@testing-library/react";

let ws;
let buffer = [];
let activeDeals = [];
const sendWhenOpen = (text) => {
  if (ws.readyState === 1) {
//     ws.send(text);
//   } else {
//     buffer.push(text);
    ws.onopen = () => {
    //   buffer.forEach( (x) => {
    //     ws.send(x);
    //   });
    console.log(text);
    };
    ws.onmessage = (msg) => {
        console.log("latest deals: "+msg)
        activeDeals = msg;
    };
  }
}

export default function App() {
  ws = new SockJS('http://localhost:8080/deals-generator');
  sendWhenOpen('connected!');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/active-deals">
            <ActiveDeals ws={ws} activeDeals={activeDeals} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  sendWhenOpen('user opened home');
  return <h2>Home</h2>;
}

function About() {
  sendWhenOpen('user opened about');
  return <h2>About</h2>;
}

function Users() {
  sendWhenOpen('user opened users');
  return <h2>Users</h2>;
}