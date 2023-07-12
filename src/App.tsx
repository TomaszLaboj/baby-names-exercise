import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";
import BabyNames from "./utils/BabyNames.js"


function App():JSX.Element{
 
 const babyNames: BabyNames[] = names.sort((a,b)=> (a>b)? 1: -1);
 const [chosenNames,setChosenNames] = useState<BabyNames[]>([])
 const [allNames, setAllNames] = useState<BabyNames[]>(babyNames)

 const handleChooseName = (clickedName: BabyNames) => {
  setChosenNames([...chosenNames,clickedName]);
  setAllNames(allNames.filter((obj)=> obj!== clickedName))
} 

 const handleMoveBack = (clickedName: BabyNames) => {
  setAllNames([...allNames,clickedName]);
  setChosenNames(chosenNames.filter((obj)=> obj !== clickedName))
 }

  return (
    <div className="main">
      <p className="main">
      Chosen names:{chosenNames.map((chosenName) => {
        return (
          <button
          onClick={()=>handleMoveBack(chosenName)}
          key={chosenName.id}
          >{chosenName.name}

          </button>
        )
      })}
      </p>
      <br/>
    All names:
    {allNames.map((babyName) => {
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

