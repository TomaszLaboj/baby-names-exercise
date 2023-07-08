import "./myStyles.css";
import names from "./data/babyNamesData.json"
import { useState } from "react";

function App(): JSX.Element {

  interface BabyNames {
    id: number,
    name: string,
    sex: string,
  }

  const babyNames:BabyNames[] = [];

    for(const element of names){
        babyNames.push(element)
    }
  const sortedNames:BabyNames[]= babyNames.sort((a,b)=>(a.name>b.name)?1:-1)
  const [name,setName] = useState('')

  const handleChoseName = (clickedName:string) => {
    setName(clickedName);

  }

  const isMale = (checkSex: string) => {
   return checkSex == 'm' ? true : false;
  }



  return (
      <body>
        <div className="main">
            <>
              Chosen names:{name}
            </>

        </div>

        <br></br>
         
        <div className="main">
      All names:{
            babyNames.map(el => {
              return(
                

                  <button
                  className = {isMale(el.sex) ? "blue":"pink"}
                  onClick={() => handleChoseName(el.name)}
                  key={el.id}>{el.name}
                  </button>
                
              )
            })
        }
      
      

        </div>
      </body>

  )


}

export default App;
