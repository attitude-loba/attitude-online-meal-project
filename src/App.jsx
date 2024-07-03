
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMeal from "./pages/SingleMeal"
// import { AppContext } from './hooks/context';
// import { useContext } from 'react';





function App() {
  // const { name , age} = useContext(AppContext);
  
 
  

  return (
    <div className='container-lg'>
       <Router>
        <Header />
        <Routes>
          <Route path='/' element= {<Homepage/>} />
          <Route path='about' element= {<About/>} />
              
           < Route path= "/meal/:id" element= {<SingleMeal/>} />   
          <Route path='*' element= {<Error/>} />
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App
