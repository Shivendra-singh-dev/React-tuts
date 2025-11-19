import React, { useContext } from 'react'
import Child3 from './Child3'

import { Number } from './Parent'

export default function Child2() {
  var {num,stateDispatch} = useContext(Number)
  return (
    <>
        <h2>Child2 Component</h2>
        <h3>num = {num}</h3>
        <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
        <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
        <hr />
        <Child3/>
    </>
  )
}



// import React from 'react'
// import Child3 from './Child3'

// export default function Child2() {
//   return (
//     <>
//         <h2>Child2 Component</h2>
//         <hr />
//         <Child3/>
//     </>
//   )
// }
