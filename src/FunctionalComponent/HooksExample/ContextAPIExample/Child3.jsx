import React, { useContext } from 'react'
import Child4 from './Child4'

import { Number } from './Parent'

export default function Child3() {
  var {num,stateDispatch} = useContext(Number)
  return (
    <>
        <h2>Child3 Component</h2>
        <h3>num = {num}</h3>
        <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
        <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
        <hr />
        <Child4/>
    </>
  )
}



// import React, { useContext } from 'react'
// import Child4 from './Child4'
// import { Name, Designation, Salary } from './Parent'


// export default function Child3() {
//     var name = useContext(Name)
//     var dsg = useContext(Designation)
//     var salary = useContext(Salary)
//     return (
//         <>
//             <h2>Child3 Component</h2>
//             <h3>Name : {name}</h3>
//             <h3>Designation : {dsg}</h3>
//             <h3>Salary : {salary}</h3>
//             <hr />
//             <Child4 />
//         </>
//     )
// }
