import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState } from "react";
import BabyNames from "./utils/BabyNames.js"


function App():JSX.Element{
 
  const babyNames: BabyNames[] = names;

  
  return (
    <body>
     <p>{babyNames.map((name)=><button id={name.name}>{name.name} key={name.id}</button>)}</p>
      
    </body>
  );
}



export default App;
