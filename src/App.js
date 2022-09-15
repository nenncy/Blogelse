import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home'
import DefaulRoutes from './Routes/Defaultroutes';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <DefaulRoutes></DefaulRoutes>
     
    </div>
  );
}

export default App;
