import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";
import BabyNames from "./utils/BabyNames.js"


function App():JSX.Element{
 
  const babyNames: BabyNames[] = names;
 const [chosenNames,setChosenNames] = useState<BabyNames[]>([])
 const handleChooseName = () => setChosenNames(...chosenNames,babyName.name) 
  return (
    <div className="main">
      <p className="main">
      Chosen names:
      </p>
      <br/>
    All names:
    {babyNames.map((babyName) => {
      return (
        <button
          
          onClick={handleChooseName}
          key={babyName.id}
        >
          {babyName.name}
        </button>
      )
    })}
      </div>
    )
  }
export default App;
