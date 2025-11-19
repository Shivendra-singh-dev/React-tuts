import React, { useState } from "react";

export default function StateExampleF() {
    let [num, setNum] = useState(1)
    let [num2, setNum2] = useState(100)
    return (
        <>
            <h1>Functional Component Local State Example</h1>
            <h2>num : {num}</h2>
            <h2>num2 : {num2}</h2>
            <button onClick={() => {
                if (num > 1) {
                    setNum(num - 1)
                    setNum2(num2 - 1)
                }
            }}>Decrement</button>
            <button onClick={() => {
                setNum(num + 1)
                setNum2(num2 + 1)
            }}>Increment</button>
        </>
    )
}

// import React,{useState} from "react";

// export default function StateExampleF(){
//     let [num,setNum] = useState(1)
//     let [num2,setNum2] = useState(100)
//     function decrement(){
//         if(num>1){
//             setNum(num-1)
//             setNum2(num2-1)
//         }
//     }
//     function increment(){
//         setNum(num+1)
//         setNum2(num2+1)
//     }
//     return(
//         <>
//             <h1>Functional Component Local State Example</h1>
//             <h2>num : {num}</h2>
//             <h2>num2 : {num2}</h2>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={increment}>Increment</button>
//         </>
//     )
// }