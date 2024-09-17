import React from 'react'
import './NavBar.css'
import { Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div>
<Link to={'/slider'} style={{textDecoration:"none"}}>  <h1 >Murali</h1></Link>
        </div>
      <img className='profile' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFbc3YpfkWk0uNT0Q-mJpW1F_VSe7vJvJwGlBZJ9AxNdKTymjaY6MIHQo8pZTf0_U_GoFvOzYrfCeyD509zvQ-l54TuyMJJFlXmitvoV0" alt="" />
    </div>
  )
}

export default Navbar
 