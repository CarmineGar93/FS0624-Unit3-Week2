import { Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarflixProfile() {
    return (
        <Navbar>
            <NavbarBrand>
                <Link className=' navbar-brand' to='/'>
                    <img src="netflix_logo.png" alt="" width={150} />
                </Link>

            </NavbarBrand>
        </Navbar>
    )
}

export default NavbarflixProfile