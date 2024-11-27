import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import{BrowserRouter, Routes, Route} from "react-router";
import Admin from "./pages/Admin";
import Candidate from "./pages/Candidate";
import Logout from "./pages/Logout";
import Questions from "./pages/Questions";
import Openingtype from "./pages/Openingtype";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/candidate" element={<Candidate/>}/>
       <Route path="/logout" element={<Logout/>}/>
       <Route path="/questions" element={<Questions/>}/>
       <Route path="/openingtype" element={<Openingtype/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
