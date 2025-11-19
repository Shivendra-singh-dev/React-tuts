import React, { useState } from 'react'

export default function SampleF() {
    var [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        dsg: "",
        salary: "",
        city: "Noida",
        state: "UP",
    })
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        alert(`
            Name             :   ${data.name}
            Email            :   ${data.email}
            Phone            :   ${data.phone}
            Designation      :   ${data.dsg}
            Salary           :   ${data.salary}
            City             :   ${data.city}
            State            :   ${data.state}
        `)
    }
    return (
        <>
            <div className="main">
                <div className="center">
                    <h1>Functional Component Input Example</h1>
                    <h3>Name        : {data.name}</h3>
                    <h3>Email       : {data.email}</h3>
                    <h3>Phone       : {data.phone}</h3>
                    <h3>Designation : {data.dsg}</h3>
                    <h3>Salary      : {data.salary}</h3>
                    <h3>City        : {data.city}</h3>
                    <h3>State       : {data.state}</h3>
                    <form onSubmit={postData}>
                        <input type="text" name="name" required onChange={getInputData} placeholder='Full Name' />
                        <input type="email" name="email" required onChange={getInputData} placeholder='Email Address' />
                        <input type="text" name="phone" required onChange={getInputData} placeholder='Phone Number' />
                        <input type="text" name="dsg" required onChange={getInputData} placeholder='Designation' />
                        <input type="number" name="salary" required onChange={getInputData} placeholder='Salary' />
                        <input type="text" name="city" required onChange={getInputData} placeholder='City' value={data.city} />
                        <input type="text" name="state" required onChange={getInputData} placeholder='State' value={data.state} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}





// import React,{useState} from 'react'

// export default function SampleF() {
//     var [name,setName] = useState("")
//     function getInputData(e){
//         setName(e.target.value)
//     }
//     function postData(){
//         alert("Hello "+name)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Functional Component Input Example</h1>
//                     <h3>Name : {name}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }
