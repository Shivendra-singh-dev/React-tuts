import React, { useContext } from 'react'
import Child5 from './Child5'

import { Number } from './Parent'

export default function Child4() {
  var {num,stateDispatch} = useContext(Number)
  return (
    <>
        <h2>Child4 Component</h2>
        <h3>num = {num}</h3>
        <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
        <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
        <hr />
        <Child5/>
    </>
  )
}



// import React from 'react'
// import Child5 from './Child5'

// export default function Child4() {
//   return (
//     <>
//         <h2>Child4 Component</h2>
//         <hr />
//         <Child5/>
//     </>
//   )
// }
