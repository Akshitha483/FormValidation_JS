import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [userFormData, setuserFormData] = useState([])
  const [SignUpData, setSignUpData] = useState([])
  let getUserData=(userData)=>{

    const userFormDataCopy=[...userFormData]

    userFormDataCopy.push(userData)
    
    setuserFormData(userFormDataCopy)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch >
            <Route exact path='/login'>
              <Login getUserData={getUserData}/>
            </Route>
            <Route exact path='/signup'>
              <SignUp />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
