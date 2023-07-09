import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";


function App():JSX.Element{
  interface BabyNames {
    id: number;
    name: string;
    sex: string;
  }

  const babyNames: BabyNames[] = [];

  for (const element of names) {
    babyNames.push(element);
  }
  let sortedNames: BabyNames[] = babyNames.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  let filteredNames:BabyNames[]= [];
  function filterNames(textToFind:string): BabyNames[] {
          filteredNames = sortedNames.filter((record)=>record.name.includes(textToFind))
  return filteredNames;
  }


  filterNames('');
  sortedNames = filteredNames;
  const [nameList, setNameList] = useState<BabyNames[]>([])

  const handleChoseName = (clickedName: BabyNames) => {
    setNameList([...nameList,clickedName]);
  };

  const isMale = (checkSex: string) => {
    return checkSex === "m" ? true : false;
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
        })}</>
      </div>

      <br></br>

      <p className="main">  Filter: <SearchBar/> </p>
      <br></br>

      <div className="main">
        All names:
        {sortedNames.map((nameFromSorted) => {
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

function SearchBar(): JSX.Element {

  const [text , setText] = useState('')

  

  return (
      <input value={text} onChange={(event) => {
        setText(event.target.value);
        
      }}/>
  ) 
}

export default App;
