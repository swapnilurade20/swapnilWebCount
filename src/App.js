import logo from './logo.svg';
import './App.css';
import Test from './HomePage'
import Wsocial from './components/Wsocial';
import Aboutus from './components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <Route path="/Home" component={Test} ></Route>
      <Route path="/Wsocial" component={Wsocial}></Route>
      <Route path="/AboutUs" component={Aboutus}></Route>
    </Router>

  );
}

export default App;
