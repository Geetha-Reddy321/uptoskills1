import Header from "./Header";
import { useState } from "react";

export default function Openingtype() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("Selected:", e.target.value); // Debugging: Logs the selected value
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center vh-60">
        <h1 className="mb-4 text-center">Select an Opening Type</h1>
        <select
          className="form-select w-50"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="">Choose...</option>
          <option value="technical">Technical</option>
          <option value="non-technical">Non-Technical</option>
        </select>
      </div>
    </>
  );
}

/*import Header from "./Header";
import "../css/Openingtype.css";
import  { useState } from "react";
export default function Openingtype(){
  
  

    return(
        <>
        <Header/>
        
        </>
    )
  }*/