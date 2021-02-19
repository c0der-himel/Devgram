import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import CreatePost from './components/pages/CreatePost';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
