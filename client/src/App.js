import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Home}/> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

