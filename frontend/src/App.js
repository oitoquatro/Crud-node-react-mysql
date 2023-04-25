import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <> 
      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </> 
  ); 
}

export default App;