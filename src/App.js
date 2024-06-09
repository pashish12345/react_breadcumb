
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Footer from './component/Footer'
import BreadCumb from './component/BreadCumb';
function App() {
  return (
    <div className="App">
       <Navbar />
       <BreadCumb />
       <Outlet>
       <Home />
       </Outlet>
       <Footer />
    </div>
  );
}

export default App;
