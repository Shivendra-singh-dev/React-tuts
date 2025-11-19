import React from 'react'

export default function Child(props) {
    function sendData() {
        props.getData([
            { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
            { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 98500, city: "Ghaziabad", state: "UP" },
            { id: 1003, name: "Mamta Jain", dsg: "Trainer", salary: 98500, city: "South Delhi", state: "Delhi" },
            { id: 1004, name: "Sumit Sharma", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
            { id: 1005, name: "Satyam Dixit", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" }
        ])
    }
    return (
        <>
            <h2>Child Component</h2>
            <button onClick={sendData}>Send Data</button>
        </>
    )
}



// import React from 'react'

// export default function Child(props) {
//   return (
//     <>
//         <h2>Child Component</h2>
//         <h2>Name : {props.name}</h2>
//         <h2>Arr : {props.arr.join(" ")}</h2>
//         <table border="2px" cellPadding="10px">
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Designation</th>
//                     <th>Salary</th>
//                     <th>City</th>
//                     <th>State</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     props.data.map((item,index)=>{
//                         return <tr key={index}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.dsg}</td>
//                         <td>{item.salary}</td>
//                         <td>{item.city}</td>
//                         <td>{item.state}</td>
//                     </tr>
//                     })
//                 }
//             </tbody>
//         </table>
//     </>
//   )
// }
