import logo from './logo.svg';
import './App.css';
import Test from './HomePage'
import Wsocial from './components/Wsocial';
import Aboutus from './components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Test}></Route>
          <Route path="/Home" component={Test}></Route>
          <Route path="/Wsocial" component={Wsocial}></Route>
          <Route path="/AboutUs" component={Aboutus}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
