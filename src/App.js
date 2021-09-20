import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import SignIn from './Components/SignIn';
import MensWear from './Components/MensWear';
import { useSelector } from 'react-redux';
import HomeAppliances from './Components/HomeAppliances';

function App() {
  const products = useSelector(state => state);
  console.log("products",products);
  console.log("neha");
  return (
    <Router>
    <div className="App">
   <Header />
      <Switch>
        <Route path='/login'  exact component={Login} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path="/account" exact>
          <CreateAccount />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path='/menswear' exact component={MensWear} />
        <Route path='/home-appliances' exact component={HomeAppliances} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
