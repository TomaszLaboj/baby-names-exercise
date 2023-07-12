import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";
import BabyNames from "./utils/BabyNames.js"


function App():JSX.Element{
 
  const babyNames: BabyNames[] = names;
 const [chosenNames,setChosenNames] = useState<BabyNames[]>([])
 const handleChooseName = (clickedName: BabyNames) => setChosenNames([...chosenNames,clickedName]) 
 const handleMoveBack = (clickedName:BabyNames) => chosenNames.filter((clickedName) => clickedName === )
  return (
    <div className="main">
      <p className="main">
      Chosen names:{chosenNames.map((chosenName) => {
        return (
          <button
          onClick={()=>handleMoveBack(chosenName)}
          key={chosenName.id}
          >

          </button>
        )
      })}
      </p>
      <br/>
    All names:
    {babyNames.map((babyName) => {
      return (
        <button
          
          onClick={()=>handleChooseName(babyName)}
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
