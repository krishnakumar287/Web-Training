import '../assets/Css/NavBar.css'
import {Link} from 'react-router-dom'
var NavBar=()=>
{
    return(
        <div className='Header'>
            <header>
                <nav><ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                    </nav>
            </header>
        </div>
    )
}
export default NavBar