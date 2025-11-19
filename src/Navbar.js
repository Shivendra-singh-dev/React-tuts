import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Test Question Item 1</h1>

        <ul className='d-flex justify-content-center list-unstyled flex-wrap gap-5 mt-4'>
          <li><Link to="/Item1" className='btn btn-success'>Item 1</Link></li>
          <li><Link to="/Item2" className='btn btn-success'>Item 2</Link></li>
          <li><Link to="/Item3" className='btn btn-success'>Item 3</Link></li>
          <li><Link to="/Item4" className='btn btn-success'>Item 4</Link></li>
          <li><Link to="/Item5" className='btn btn-success'>Item 5</Link></li>
        </ul>
      </div>
    </>
  )
}
