import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    let [data, setData] = useState([])
    function getData(data) {
        setData(data)
    }
    return (
        <>
            <h1>Functional Component Sending Data from Child to Parent Example</h1>
            <h2>Parent Component</h2>
            {
                data.length ?
                    <table border="2px" cellPadding="10px">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dsg}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table> : ""
            }
            <hr />
            <Child getData={getData} />
        </>
    )
}




// import React from 'react'
// import Child from './Child'

// export default function Parent() {
//     return (
//         <>
//             <h1>Functional Component Sending Data from Parent to Child Example</h1>
//             <h2>Parent Component</h2>
//             <hr />
//             <Child
//                 name="Nitin Chauhan"
//                 arr={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
//                 data={[
//                     { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
//                     { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 98500, city: "Ghaziabad", state: "UP" },
//                     { id: 1003, name: "Mamta Jain", dsg: "Trainer", salary: 98500, city: "South Delhi", state: "Delhi" },
//                     { id: 1004, name: "Sumit Sharma", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
//                     { id: 1005, name: "Satyam Dixit", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" }
//                 ]}
//             />
//         </>
//     )
// }
