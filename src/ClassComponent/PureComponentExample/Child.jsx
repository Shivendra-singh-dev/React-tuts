import React, { Component } from 'react'

export default class Child extends Component {
    shouldComponentUpdate(nextProps){
        return nextProps.num2!==this.props.num2
        // if(nextProps.num2!==this.props.num2)
        // return true
        // else
        // return false
    }
    render() {
        console.log("Child Component is Rendered")
        return (
            <div>
                <h2>Child Component</h2>
                <h3>num1 = {this.props.num1}</h3>
                <h3>num2 = {this.props.num2}</h3>
            </div>
        )
    }
}


// import React, { PureComponent } from 'react'

// export default class Child extends PureComponent {
//     render() {
//         console.log("Child Component is Rendered")
//         return (
//             <div>
//                 <h2>Child Component</h2>
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react'

// export default class Child extends Component {
//     shouldComponentUpdate() {
//         return false
//     }
//     render() {
//         console.log("Child Component is Rendered")
//         return (
//             <div>
//                 <h2>Child Component</h2>
//             </div>
//         )
//     }
// }
