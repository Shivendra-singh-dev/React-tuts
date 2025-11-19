import React, { Component } from 'react'

export default class Child extends Component {
  sendFromChild(){
    this.props.getData([
      { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
      { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 98500, city: "Ghaziabad", state: "UP" },
      { id: 1003, name: "Mamta Jain", dsg: "Trainer", salary: 98500, city: "South Delhi", state: "Delhi" },
      { id: 1004, name: "Sumit Sharma", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
      { id: 1005, name: "Satyam Dixit", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" }
      ])
  }
  render() {
    return (
      <>
        <h2>Child Component</h2>
        <button onClick={()=>this.sendFromChild()}>Send Data to Parent</button>
      </>
    )
  }
}
