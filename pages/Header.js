import {useState} from "react";
import "../css/Header.css";
export default function Header(){

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleSidebar = () => {
          setIsOpen(!isOpen);
        };
    
    return(
        <>
        
        <div>
      <div className="navbar">
        <span className="hamburger" onClick={toggleSidebar}>
          ☰  &nbsp; &nbsp;Zinterview.ai
        </span>
       
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>
          &times;
        </a>
        <div className="wrapper">
        <i class='bx bxs-user-circle'></i><p>Welcome, uptoskills</p>
        </div>
        <a href="/admin">Admin</a>
        <a href="questions">Question bank</a>
        <a href="/logout">Log out</a>
        <a href="/candidate">Candidate</a>
      </div>
    </div>
      
        </>
    )
    }