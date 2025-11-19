import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            num1: 1,
            num2: 101
        }
    }
    render() {
        console.log("Parent Component is Rendered")
        return (
            <div>
                <h1>Should Component Update and Pure Component Example</h1>
                <h2>Parent Component</h2>
                <h3>num1 = {this.state.num1}</h3>
                <h3>num2 = {this.state.num2}</h3>
                <button onClick={() => this.setState({ num1: this.state.num1 + 1 })}>Inc num1</button>
                <button onClick={() => this.setState({ num2: this.state.num2 + 1 })}>Inc num2</button>
                <hr />
                <Child num1={this.state.num1} num2={this.state.num2} />
            </div>
        )
    }
}




// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num1: 1
//         }
//     }
//     render() {
//         console.log("Parent Component is Rendered")
//         return (
//             <div>
//                 <h1>Should Component Update and Pure Component Example</h1>
//                 <h2>Parent Component</h2>
//                 <h3>num1 = {this.state.num1}</h3>
//                 <button onClick={() => this.setState({ num1: this.state.num1+1 })}>Inc num1</button>
//                 <hr />
//                 <Child />
//             </div>
//         )
//     }
// }
