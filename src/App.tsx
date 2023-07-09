import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";
import BabyNames from "./utils/BabyNames.js"


function App():JSX.Element{
 
  const babyNames: BabyNames[] = [];

  for (const element of names) {
    babyNames.push(element);
  }
  const sortedNames: BabyNames[] = babyNames.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  function filterNames(textToFind:string,dataToFilter: BabyNames[]): BabyNames[] {
    let filteredNames:BabyNames[]= [];
        filteredNames = dataToFilter.filter((record)=>record.name.includes(textToFind))
return filteredNames;
}

const [nameList, setNameList] = useState<BabyNames[]>([])
const [text , setText] = useState('') // state for search bar
const handleChoseName = (clickedName: BabyNames) => {
  setNameList([...nameList,clickedName]);
};

const isMale = (checkSex: string) => {
  return checkSex === "m" ? true : false;
};

const filteredNames: BabyNames[] = filterNames(text,sortedNames)
  return (
    <body>
      
      <div className="main">
        <>Chosen names:{nameList.map((chosenName) => {
        return (
          <button
              className={isMale(chosenName.sex) ? "blue" : "pink"}
              key={chosenName.id}
            >{chosenName.name}</button>
        )
        })}</>
      </div>

      <br></br>

      <p className="main">  Filter: <input value={text} onChange={(event) => {
          setText(event.target.value);
          
        }}/></p>
      <br></br>

      <div className="main">
        All names:
        {filteredNames.map((nameFromSorted) => {
          return (
            <button
              className={isMale(nameFromSorted.sex) ? "blue" : "pink"}
              onClick={() => handleChoseName(nameFromSorted)}
              key={nameFromSorted.id}
            >
              {nameFromSorted.name}
            </button>
          );
        })}
      </div>
    </body>
  );
}



export default App;
