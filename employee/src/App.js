import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button, Container, Col, Row } from "reactstrap";
import Menu from './component/Menu';
import ViewEmployee from './component/AllEmp';
import AddEmployee from './component/AddEmp';
import UpdateEmployee from './component/UpdateEmp';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-emp" element={<AddEmployee />} exact />
                <Route path="/view-emp" element={<ViewEmployee />} exact />
                <Route path="/update-emp" element={<UpdateEmployee />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
