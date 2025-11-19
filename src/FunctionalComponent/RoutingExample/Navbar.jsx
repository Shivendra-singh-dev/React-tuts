import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/profile/Nitin Chauhan/Trainer/98500">Profile</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </>
    )
}



// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/profile/Nitin Chauhan/Trainer/98500">Profile</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//     </ul>
//     </>
//   )
// }
