import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import Dashboard from './components/dashboard'
import Checkout from './components/dashboard/Checkout'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Route path = "/" exact component = {LoginForm} />
        <Route path = "/dashboard" exact component = {Dashboard} />
        <Route path = "/checkout" exact component = {Checkout} />
      </Router>
    </Provider>
  );
}

export default App;
