import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewEmp from './component/ViewEmp';
import Header from './component/Header';
import AddEmp from './component/AddEmp';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<ViewEmp />} exact />
            <Route path='/view-emp' element={<ViewEmp />} exact />
            <Route path='/add-emp' element={<AddEmp />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
