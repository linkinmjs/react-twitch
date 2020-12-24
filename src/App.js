import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import Games from './components/Games';
import Stream from './components/Stream';

import './styles.css';

function App() {
  return (
    <Router>

      <Header/>
      
      <Route exact path='/' component={Games} />
      <Route exact path='/top-streams' component={Stream} />
    </Router>
  );
}

export default App;
