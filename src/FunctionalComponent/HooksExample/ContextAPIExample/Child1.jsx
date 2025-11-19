import React, { useContext } from 'react'
import Child2 from './Child2'

import { Number } from './Parent'

export default function Child1() {
  var {num,stateDispatch} = useContext(Number)
  return (
    <>
        <h2>Child1 Component</h2>
        <h3>num = {num}</h3>
        <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
        <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
        <hr />
        <Child2/>
    </>
  )
}



// import React from 'react'
// import Child2 from './Child2'

// export default function Child1() {
//   return (
//     <>
//         <h2>Child1 Component</h2>
//         <hr />
//         <Child2/>
//     </>
//   )
// }
