// import React, { useState } from "react";
// import './index.css';
// function App(){

//     let [fullName,setfullName]=useState({
//         fname:'',
//         lname:''
//     });
    

//     let InputEvent=(event)=>{
//         console.log(event.target.value);
//         console.log(event.target.name);
        
//         let value=event.target.value;
//         let name=event.target.name;

//         setfullName((preValue)=>{
//             // console.log(preValue);
//             if(name==='fname'){
//                 return{
//                     fname:value,
//                     lname:preValue.lname
//                 }
//             }else if(name==='lname'){
//                 return{
//                     fname:preValue.fname,
//                     lname:value
//                 }
//             }
//         })

//     }
    
//     let onSubmit=(event)=>{
//     event.preventDefault()
//     alert('form submitted');
//     }


//     return(
//         <>
//         <form onSubmit={onSubmit}>
//             <div>
    
//             <h1>Hello {fullName.fname} {fullName.lname}</h1>
//             <input 
//                 type="text" 
//                 placeholder="ENTER YOUR FIRSTNAME" 
//                 name="fname"
//                 onChange={InputEvent}
//                 value={fullName.fname}
//             />
//             <input 
//                 type="text" 
//                 placeholder="ENTER YOUR LASTNAME" 
//                 name="lname"
//                 onChange={InputEvent}
//                 value={fullName.lname}
//             />
//             <button type="submit" onClick={onSubmit}>submit me😊</button>
//             </div>
//         </form>
//         </>
//     )
// }
// export default App



import React, { useState } from "react";
import './index.css';
function App(){

    let [name,setName]=useState('');
    let [lastname,setlastname]=useState('')
    let [fullName,setfullName] =useState('')
    let [lastnewName,setlastnewName]=useState('');

    const [Counter,setcouter] =useState(0)

    // let Nmae=0;

    let handleCounter=()=>{
        setcouter(Counter+1);
        // Nmae++
    }
    
    let InputEvent=(event)=>{
        setName(event.target.value);
    }
    
    let onSubmit=(event)=>{
    event.preventDefault()
        setfullName(name)
        setlastnewName(lastname)
    }

    let InputEvent2=(event)=>{
        setlastname(event.target.value)
    }


    return(
        <>
        <form onSubmit={onSubmit}>
            <div>
    
            <h1>Hello {fullName} {lastnewName}</h1>
            <input 
                type="text" 
                placeholder="ENTER YOUR FIRSTNAME" 
                
                onChange={InputEvent}
                value={name}
            />
            <input 
                type="text" 
                placeholder="ENTER YOUR LASTNAME" 
                
                onChange={InputEvent2}
                value={lastname}
            />
            <button type="submit" onClick={onSubmit}>submit me😊</button>
            </div>
        </form>
        <div>
            <h1 >{Counter}</h1>
            <button  onClick={handleCounter}>submit me😊</button>
        </div>
        </>
    )
}
export default App
