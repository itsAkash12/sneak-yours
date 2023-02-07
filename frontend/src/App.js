import './App.css';
import {Box} from "@chakra-ui/react"
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar/Navbar';
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration:800,
      // anchorPlacement:'top-center'
      easing: 'ease-in-sine'
    });
  }, [])
  return (
    <Box className="App">
      {/* <Navbar /> */}
      <Allroutes />
    </Box>
  );
}

export default App;
