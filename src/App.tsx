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

  function filterNames(textToFind:string,
                      dataToFilter: BabyNames[],
                      listOfChosenNames: BabyNames[],
                      ): BabyNames[] {
    let filteredNames:BabyNames[]= [];
        filteredNames = dataToFilter.filter((record)=>record.name.toLowerCase().includes(textToFind.toLowerCase()))
        
  return filteredNames;
  }
  function filterDuplicates(arrayToFilter:BabyNames[], arrayToCompare:BabyNames[]):BabyNames[]{
      for(const el of arrayToCompare){
        for(let i=0;i<arrayToFilter.length;i++){
          if(el === arrayToFilter[i]){
            arrayToFilter = arrayToFilter.splice(i,1)
            i = 0;
          }
        }
      }
    return arrayToFilter;
  }

  function isMale(checkSex: string)  {
    if(checkSex === "m"){
      return true;
    }
    return false;
  }
  const [nameList, setNameList] = useState<BabyNames[]>([])
  const [text , setText] = useState('') // state for search bar

  let filteredNames: BabyNames[] = filterNames(text,sortedNames, nameList)
  filteredNames = filterDuplicates(filteredNames, nameList);  

  const handleChoseName = (clickedName: BabyNames) => {
    setNameList([...nameList,clickedName]);
//  filteredNames.splice(filteredNames.indexOf(clickedName),1)
};


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
        })}
        {nameList.map((chosenName) => console.log(chosenName))}
        </>
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
