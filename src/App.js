import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Control from './components/Control';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/navbar';
import NewCard from './components/NewCardForm';


function App() {
  
  return (  
    <div>
    <Router>
    <Switch>
      <Route exact path='/actor' component={Control}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/navbar" component={Navbar}/>
      <Route exact path="/newcardform" component={NewCard}/>
    </Switch>
  </Router> 
  </div>
  );
}

export default App;
