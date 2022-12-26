import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Student from './components/student';
import AllStudent from './components/AllStudent';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import Menu from './components/Menu';

import { Button, Container, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // This is our React Page of the application
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          {/* Header portion */}
          <Header />
          <Row>
            <Col md={4}>
              {/* Left Column : MENU */}
              <Menu />
            </Col>
            <Col md={8}>
              {/* Right Column : DISPLAY */}
              <Routes>
                {/* This is for Home menu */}
                <Route path="/" element={<Home />} exact />
                {/* This is for Add Student menu */}
                <Route path="/add-student" element={<AddStudent />} exact />
                {/* This is for view Students menu */}
                <Route path="/view-students" element={<AllStudent />} exact />
              </Routes>

            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;