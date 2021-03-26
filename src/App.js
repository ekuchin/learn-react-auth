import React, {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/Login"
import Cats from "./components/Cats"

export default function App() {

  const [token, setToken] = useState("");
//  const history = useHistory();


  return (
    <BrowserRouter>
      <div>
        <nav>
        {(token === "") ? <h3>Вы не авторизованы</h3>
        : <h3>Вы авторизованы: {token}</h3>
        }
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
          </ul>
        </nav>

        <Switch>        
          
          <Route path="/cats">
          {(token === "") ? <Redirect to="/login" /> : <Cats token={token}/>}
          </Route>
          
          <Route path="/dogs">
            <Dogs />
          </Route>
          
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          
          <Route path="/">
            <Home token={token} setToken={setToken}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home(props) {
  return (
    <h2>Это главная страница</h2>
  )
}

function Dogs() {
  return (
    <>
    <h2>Это список песиков</h2>
    <h3>Раздел в разработке</h3>
    </>
  )
}
