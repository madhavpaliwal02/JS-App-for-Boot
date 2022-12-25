import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewEmp from './component/ViewEmp';
import Header from './component/Header';


function App() {
  return (
    <div>
      <Router>

        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<ViewEmp />} />
            <Route path='/employees' element={<ViewEmp />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
