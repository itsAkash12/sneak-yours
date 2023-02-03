import './App.css';
import {Box} from "@chakra-ui/react"
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Box className="App">
      <Navbar />
      <Allroutes />
    </Box>
  );
}

export default App;
