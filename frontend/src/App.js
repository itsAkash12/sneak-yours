import './App.css';
import {Box,Heading, Image} from "@chakra-ui/react"
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Box className="App">
      <Navbar></Navbar>
      <Allroutes />
    </Box>
  );
}

export default App;
