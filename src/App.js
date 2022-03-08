import Report from './components/Report';
import Reg from './components/reg';
import Log from './components/log in';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App(){
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/report' element={<Report/>}/>
    <Route path='/log' element={<Log/>}/>
    <Route path='/reg' element={<Reg/>}/>
  </Routes>
  </Router>
  );
}

export default App;
