import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import Users from "./Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
  <Router>
  <Route exact path="/"><MainPage/></Route>
  <Route path="/posts"><Users /></Route>
  </Router>
  );
}

export default App;
