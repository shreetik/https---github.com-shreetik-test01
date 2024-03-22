import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card.jsx'
import Hook from './Hook.jsx'
 const component =  ReactDOM.createRoot(document.getElementById('root'));




component.render( 



<>

<Hook/>


{/* <Card myname='shreetik' title='Ek number' ob={myobj} /> */}

{/* <Card myname="bishal" title='cycle bali' /> */}
{/* <Card myname="Sourav•💑" title='Tikili'/> */}

</>
);



// console.log('start')
// let mycomponent={
//     type:'a',
//     text:'click me',
//     attribute:{
//         herf:'http://google.com',
//         target:"_blank"
//     }
// }

// const element = document.getElementById('root');

// function renderComponent(el,mycomp){

//    const x = document.createElement(mycomp.type);

//    x.setAttribute("href",mycomp.attribute.herf);
//    x.setAttribute("target",mycomp.attribute.target);
  
//    x.innerHTML = mycomp.text ;

//    el.appendChild(x);



//   console.log(x);
// }

// renderComponent(element,mycomponent);