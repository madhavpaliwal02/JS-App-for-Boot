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

  const btnHandle = () => {
    toast("this is my first message");
    toast.success("success", { position: 'top-center' });
    toast.error("error", { position: 'top-left' });
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              {/* <h2 className='text-center'>This is Menu Side</h2> */}
              <Menu />
            </Col>
            <Col md={8}>
              {/* <h2 className='text-center'>This is Container window</h2> */}
              {/* <AllStudent /> */}
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-student" element={<AddStudent />} exact />
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