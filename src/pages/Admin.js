import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./Header";
import "../css/Admin.css"; // Link the CSS file

export default function Admin() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleCreateOpening = () => {
    navigate("/openingtype"); // Replace with your target route
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <input
          className="btn-1"
          type="button"
          value="Create Opening"
          onClick={handleCreateOpening} // Attach the navigation function
        />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
      <b><p>All Openings</p></b>
    </>
  );
}

/*import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import "../css/Admin.css"; // Link the CSS file
export default function Admin(){
    


  return (
    <>
      <Header />
      <div className="wrapper">
      
           <input className="btn-1" type="button" value="Create Opening"/>
           <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
         </form>
         
         

      </div>
      <b><p>All Openings</p></b>


    
 

      
    </>
  )
}*/
