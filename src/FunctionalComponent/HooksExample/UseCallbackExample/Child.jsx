import React from 'react'

export default function Child(props) {
    let sum = 0;
    for (let i = 1; i <= 100000000+props.num2; i++) {
        sum = sum + i
    }
    return(
        <>
            <h2>Child Component</h2>
            <h3>sum = {sum}</h3>
        </>
    )
}
