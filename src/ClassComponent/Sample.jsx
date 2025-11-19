import React, { Component } from "react";

export var name1 = "Nitin Chauhan"
export var a1 = [10,20,30,40,50,60,70,80,90,100]
export var emp1 = {
    id:1001,
    name:"Mamta Jain",
    dsg:"Trainer",
    salary:78500,
    city:"South Delhi",
    state:"Delhi"
}
export function display1(){
    return <h3>In display1 of Sample Class Component</h3>
}
export default class Sample extends Component{
    render(){
        return(
            <>
                <h1>Class Component Example</h1>
                <h2>Sample Class Component</h2>
            </>
        )
    }
}


// var name1 = "Nitin Chauhan"
// var a1 = [10,20,30,40,50,60,70,80,90,100]
// var emp1 = {
//     id:1001,
//     name:"Mamta Jain",
//     dsg:"Trainer",
//     salary:78500,
//     city:"South Delhi",
//     state:"Delhi"
// }
// function display1(){
//     return <h3>In display1 of Sample Class Component</h3>
// }
// class Sample extends Component{
//     render(){
//         return(
//             <>
//                 <h1>Class Component Example</h1>
//                 <h2>Sample Class Component</h2>
//             </>
//         )
//     }
// }
// export default Sample           //default export
// export {name1,a1,emp1,display1} //name export


// export default class Sample extends Component{
//     render(){
//         return(
//             <>
//                 <h1>Class Component Example</h1>
//                 <h2>Sample Class Component</h2>
//             </>
//         )
//     }
// }

// class Sample extends Component{
//     render(){
//         return(
//             <>
//                 <h1>Class Component Example</h1>
//                 <h2>Sample Class Component</h2>
//             </>
//         )
//     }
// }
// export default Sample