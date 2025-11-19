import React, { useRef } from 'react'

export default function Sample() {
    let name = useRef("")
    function getInputData(e) {
        name.current = e.target.value
    }
    function postData(e) {
        e.preventDefault()
        alert("Hello " + name.current)
    }
    return (
        <>
            <div className="container">
                <h2 className='bg-primary text-center p-2 text-light'>useRef Example</h2>
                <h3>Name : {name.current}</h3>
                <form onSubmit={postData}>
                    <div className="mb-3">
                        <input type="text" name='name' required onChange={getInputData} placeholder='Enter Full Name' className='form-control' />
                    </div>
                    <div className="mb-3">
                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
