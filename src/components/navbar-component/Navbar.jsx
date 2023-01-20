import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react'; 
import { ReactComponent as Logo } from '../../assets/renault2.svg';
import './navbar.styles.css';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navbar'>
                <Link className='link-to-home' to='/home'>
                    <div className="navbar-title">
                        RENAULT ENGINES
                        <Logo className='logo' />
                    </div>
                </Link>
                    <ul>
                        <li>
                            <a href="/contacts">Contacts</a>
                        </li>
                        <li>
                            <a href="/log-in">Log In</a>
                        </li>
                    </ul>
            </div>
             <Outlet />
        </Fragment>
    )
}

export default NavBar;