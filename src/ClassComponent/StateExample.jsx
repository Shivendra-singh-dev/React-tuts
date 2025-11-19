import React, { Component } from "react";

export default class StateExample extends Component{
    constructor(){
        super()
        this.state = {
            num:1,
            num2:100
        }
    }
    render(){
        return(
            <>
                <h1>Class Component Local State Management</h1>
                <h2>num = {this.state.num}</h2>
                <h2>num2 = {this.state.num2}</h2>
                <button onClick={()=>{
                    if(this.state.num>1){
                        this.setState({
                            num:this.state.num-1,
                            num2:this.state.num2-1
                        })
                    }
                }}>Decrement</button>
                <button onClick={()=>this.setState({
                        num:this.state.num+1,
                        num2:this.state.num2+1
                    })}>Increment</button>
            </>
        )
    }
}


// import React, { Component } from "react";

// export default class StateExample extends Component{
//     constructor(){
//         super()
//         this.state = {
//             num:1
//         }
//     }
//     decrement(){
//         if(this.state.num>1){
//             this.setState({num:this.state.num-1})
//         }
//     }
//     increment(){
//         this.setState({num:this.state.num+1})
//     }
//     render(){
//         return(
//             <>
//                 <h1>Class Component Local State Management</h1>
//                 <h2>num = {this.state.num}</h2>
//                 <button onClick={()=>this.decrement()}>Decrement</button>
//                 <button onClick={()=>this.increment()}>Increment</button>
//             </>
//         )
//     }
// }