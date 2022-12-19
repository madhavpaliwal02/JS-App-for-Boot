import logo from './logo.svg';
import './App.css';
// import Header from './components/my';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import Home from './components/home';

function App() {

  const btnHandle = () => {
    toast("this is my first message");
    toast.success("done" , {position:'top-center' });
    toast.error("done" , {position:'top-left' });
  };
  return (
    <div>
      {/* <ToastContainer /> */}
      <Home />
    </div>
  );
}

export default App;