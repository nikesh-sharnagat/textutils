import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Textutils Blog "/>
      <div className="container my-3">
      <TextForm Heading="Enter the text to analyze below"/>
      </div>
      
    </>
  );
}

export default App;
