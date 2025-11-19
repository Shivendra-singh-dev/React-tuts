import React, { Component } from 'react'

export default class Sample extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            dsg: "",
            salary: "",
            city: "Noida",
            state: "UP"
        }
    }
    getInputData(event) {
        // console.log(event.target.name,event.target.value);
        var { name, value } = event.target
        // if (name === "name")
        //     this.setState({ name: value })
        // else if (name === "email")
        //     this.setState({ email: value })
        // else if (name === "phone")
        //     this.setState({ phone: value })
        // else if (name === "dsg")
        //     this.setState({ dsg: value })
        // else if (name === "salary")
        //     this.setState({ salary: value })
        // else if (name === "city")
        //     this.setState({ city: value })
        // else
        //     this.setState({ state: value })


        this.setState(()=>{
            return{
                ...this.state,
                [name]:value
            }
        })
    }
    postData(e) {
        e.preventDefault()
        alert(`
            Name         :    ${this.state.name}
            Email        :    ${this.state.email}
            Phone        :    ${this.state.phone}
            Designation  :    ${this.state.dsg}
            Salary       :    ${this.state.salary}
            City         :    ${this.state.city}
            State        :    ${this.state.state}
        `)
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="center">
                        <h1>Class Component Input Example</h1>
                        <h3>Name : {this.state.name}</h3>
                        <h3>Email : {this.state.email}</h3>
                        <h3>Phone : {this.state.phone}</h3>
                        <h3>Designation : {this.state.dsg}</h3>
                        <h3>Salary : {this.state.salary}</h3>
                        <h3>City : {this.state.city}</h3>
                        <h3>State : {this.state.state}</h3>
                        <form onSubmit={(e) => this.postData(e)}>
                            <input type="text" name="name" required onChange={(event) => this.getInputData(event)} placeholder="Full Name" />
                            <input type="email" name="email" required onChange={(event) => this.getInputData(event)} placeholder="Email Address" />
                            <input type="text" name="phone" required onChange={(event) => this.getInputData(event)} placeholder="Phone Number" />
                            <input type="text" name="dsg" required onChange={(event) => this.getInputData(event)} placeholder="Designation" />
                            <input type="number" name="salary" required onChange={(event) => this.getInputData(event)} placeholder="Salary" />
                            <input type="text" name="city" required onChange={(event) => this.getInputData(event)} placeholder="City Name" value={this.state.city}/>
                            <input type="text" name="state" required onChange={(event) => this.getInputData(event)} placeholder="State Name" value={this.state.state}/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}




// import React, { Component } from 'react'

// export default class Sample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: ""
//         }
//     }
//     getInputData(event) {
//         // console.log(event.target.value);
//         this.setState({name:event.target.value})
//     }
//     postData(){
//         alert(`Hello ${this.state.name}`)
//     }
//     render() {
//         return (
//             <>
//                 <div className="main">
//                     <div className="center">
//                         <h1>Class Component Input Example</h1>
//                         <h3>Name : {this.state.name}</h3>
//                         <input type="text" name="name" onChange={(event) => this.getInputData(event)} placeholder="Full Name" />
//                         <button onClick={()=>this.postData()}>Submit</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
