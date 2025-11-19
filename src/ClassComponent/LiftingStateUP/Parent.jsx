import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    getData = (data)=>{
        this.setState({data:data})
    }
    render() {
        return (
            <>
                <h1>Class Component Sending Data from Child Component to Parent Component</h1>
                <h2>Parent Component</h2>
                {
                    this.state.data.length ?
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
                                    this.state.data.map((item, index) => {
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
                <Child getData={this.getData} />
            </>
        )
    }
}




// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Class Component Sending Data from Parent Component to Child Component</h1>
//                 <h2>Parent Component</h2>
//                 <hr />
//                 <Child
//                     name="Nitin Chauhan"
//                     arr={[10,20,30,40,50,60,70,80,90,100]}
//                     data = {[
//                         {id:1001,name:"Nitin Chauhan",dsg:"Trainer",salary:98500,city:"Faridabad",state:"Haryana"},
//                         {id:1002,name:"Deepak Singh",dsg:"Trainer",salary:98500,city:"Ghaziabad",state:"UP"},
//                         {id:1003,name:"Mamta Jain",dsg:"Trainer",salary:98500,city:"South Delhi",state:"Delhi"},
//                         {id:1004,name:"Sumit Sharma",dsg:"Trainer",salary:98500,city:"Faridabad",state:"Haryana"},
//                         {id:1005,name:"Satyam Dixit",dsg:"Trainer",salary:98500,city:"Faridabad",state:"Haryana"}
//                     ]}
//                 />
//             </>
//         )
//     }
// }
