
import { useState } from "react";

function Calculator(){


    let [value,setValue]  = useState('');
   
   
   
    let displayvalue=''
    function appendValue( val){
       
        // displayvalue = displayvalue + val;
        // console.log(displayvalue)
        setValue();
        
    }

    function test(){
        console.log('working');
    }

   function setv(e){
    console.log(e);
    setValue(value + e.target.value);
   }

return(

    <>
    
    <div className="container">

        <input type="text" name="" id="" value={value} readOnly/>
        <div className="d-flex">
        <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="=" onClick={()=> setValue(eval(value))}/>
        <input type="button" value="C" onClick={()=> setValue('')}/>
        </div>
    </div>
    
    </>
)


}

export default Calculator
