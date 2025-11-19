import React, { createContext, useReducer } from 'react'
import Child1 from './Child1'
import countReducer from './countReducer'

export var Number = createContext()
export default function Parent() {
    var [state, stateDispatch] = useReducer(countReducer, { num: 1 })
    return (
        <>
            <h2>Parent Component</h2>
            <h3>num = {state.num}</h3>
            <button onClick={() => stateDispatch({ type: "DEC" })}>Decrement</button>
            <button onClick={() => stateDispatch({ type: "INC" })}>Increment</button>
            <hr />
            <Number.Provider value={{ ...state, stateDispatch }}>
                <Child1 />
            </Number.Provider>
        </>
    )
}





// import React, { createContext } from 'react'
// import Child1 from './Child1'

// export var Name = createContext()
// export var Designation = createContext()
// export var Salary = createContext()
// export default function Parent() {
//     return (
//         <>
//             <h2>Parent Component</h2>
//             <hr />
//             <Name.Provider value="Nitin Chauhan">
//                 <Designation.Provider value="Trainer">
//                     <Salary.Provider value={98500}>
//                         <Child1 />
//                     </Salary.Provider>
//                 </Designation.Provider>
//             </Name.Provider>
//         </>
//     )
// }
