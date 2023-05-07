import "./App.css";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Form />
    </div>
  );
}

export default App;
