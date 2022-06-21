import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Slider from './Components/Layout/Slider';
import Users from './Components/Users';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
  
     <>
     <Header/>
     <Slider/>
     <Users/>
     <Footer/>
     </>

  );
}

export default App;
