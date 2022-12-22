import logo from './logo.svg';
import './App.css';
// import Header from './components/my';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import Home from './components/home';
import Course from './components/student';
import AllCourse from './components/AllStudent';
import AddCourse from './components/AddStudent';

function App() {

  const btnHandle = () => {
    toast("this is my first message");
    toast.success("success", { position: 'top-center' });
    toast.error("error", { position: 'top-left' });
  };
  return (
    <div>
      
    </div>
  );
}

export default App;