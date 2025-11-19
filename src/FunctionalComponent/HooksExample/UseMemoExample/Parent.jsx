import React, { useMemo, useState } from 'react'
import Child from "./Child"

export default function Parent() {
    let [num1,setNum1] = useState(1)
    let [num2,setNum2] = useState(101)
    let sum = useMemo(()=><Child num1={num1} num2={num2}/>,[num2])
    // let sum = useMemo(()=>Child(num2),[num2])

    console.log("Parent Component is Called")
    return (
        <>
            <h1>UseMemo Example</h1>
            <h2>Parent Component</h2>
            <h3>num1 = {num1}</h3>
            <h3>num2 = {num2}</h3>
            <button onClick={()=>setNum1(num1+1)}>Inc num1</button>
            <button onClick={()=>setNum2(num2+1)}>Inc num2</button>
            <hr />
            <h3>Calculated Value = {sum}</h3>
        </>
    )
}
// function Child(num2) {
//     let sum = 0;
//     for (let i = 1; i <= 100000000+num2; i++) {
//         sum = sum + i
//     }
//     console.log("Child Component is Called")
//     return sum
// }