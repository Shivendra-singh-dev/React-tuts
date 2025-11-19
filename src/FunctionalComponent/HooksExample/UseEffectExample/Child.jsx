import React, { useEffect } from 'react'

export default function Child(props) {
    useEffect(()=>{
        console.log("Child Component is Rendered")
    },[props.num2])
    return (
        <>
            <h2>Child Component</h2>
            <h3>num1 = {props.num1}</h3>
            <h3>num2 = {props.num2}</h3>
        </>
    )
}
