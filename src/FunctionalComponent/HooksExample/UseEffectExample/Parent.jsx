import React, { useEffect, useState } from 'react'
import Child from './Child'

export default function Parent() {
    let [num1,setNum1] = useState(1)
    let [num2,setNum2] = useState(101)
    useEffect(()=>{
        console.log("Parent Component is Rendered")
    })
    return (
        <>
            <h1>useEffect Example to Stop Rendering to Child Component</h1>
            <h2>Parent Component</h2>
            <h3>num1 = {num1}</h3>           
            <h3>num2 = {num2}</h3>           
            <button onClick={()=>setNum1(num1+1)}>INC num1</button>
            <button onClick={()=>setNum2(num2+1)}>INC num2</button>
            <hr />
            <Child num1={num1} num2={num2}/>
        </>
    )
}
