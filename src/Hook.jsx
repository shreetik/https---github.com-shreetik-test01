
import { useState } from "react";


function Hook(){

   // let counter = 0;

   let [counter,useSourav]  = useState(0);

  let  updateCounter = ()=>{

    counter +=1
    useSourav(counter);
    console.log(counter)
    }

return(
<>
<div className="container">
<h1>Counter: {counter} </h1>

<button onClick={updateCounter} >Click</button>

<p>{counter}</p>
<h1>{counter}</h1>
</div>
</>)
}

export default Hook