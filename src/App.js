// importing all the necessary components to build the application
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { useState } from "react";

// the main page which aggregates all different components here
function App() {
  // to toggle between products and transactions page
  const [toggleVal, setToggleVal] = useState(false);
  const handleToggleSwitch = (val) => {
    setToggleVal(val);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar toggleVal={toggleVal} toggleSwitch={handleToggleSwitch} />
        <Home toggleVal={toggleVal} />
      </div>
    </div>
  );
}

export default App;
