import React, { useContext } from 'react'

import { Number } from './Parent'

export default function Child5() {
  var {num,stateDispatch} = useContext(Number)
  return (
    <>
        <h2>Child5 Component</h2>
        <h3>num = {num}</h3>
        <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
        <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
    </>
  )
}

// import React from 'react'

// import { Designation, Name, Salary } from './Parent'
// export default function Child5() {
//     return (
//         <>
//             <h2>Child5 Component</h2>
//             <Name.Consumer>
//             {
//                 (name)=><h3>Name : {name}</h3>
//             }
//             </Name.Consumer>
//             <Designation.Consumer>
//             {
//                 (dsg)=><h3>Designation : {dsg}</h3>
//             }
//             </Designation.Consumer>
//             <Salary.Consumer>
//             {
//                 (salary)=><h3>Salary : {salary}</h3>
//             }
//             </Salary.Consumer>
//         </>
//     )
// }
