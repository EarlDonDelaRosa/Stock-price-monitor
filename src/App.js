import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './stock/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomePage /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
