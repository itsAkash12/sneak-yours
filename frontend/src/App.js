import './App.css';
import {Box,Heading, Image} from "@chakra-ui/react"
import image from "./jordan.png"

function App() {
  return (
    <Box className="App">
      <Box  className="App-container">
        <Heading color={"white"}>SNEAKYOURS</Heading>
        <Box>
          <Image margin={"auto"} transform="rotate(350deg)" mt={"100px"} w={"40%"} src={image} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
