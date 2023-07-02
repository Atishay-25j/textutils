import './App.css';
import About from './components/About.js';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = "Text Utils - DarkMode"
      // setInterval(() => {
      //   document.title = "Text Utils - Install Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text Utils - DarkMode"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = "Text Utils - LightMode"
    }
  }
  return (
    <>




      <Router>
        <Navbar title="TEXTUTILS" about="ABOUTUTILS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          <Routes>
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character counter, Remove extra spaces " mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode ={mode}/>} />
          </Routes>

        </div>
      </Router>

    </>
  );
}

export default App;