import './AppNav.css'
import { Link } from "react-router-dom";
import axios from 'axios';

const AppNav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();

        axios
            .post("https://akademia108.pl/api/social-app/user/logout")
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    props.setUser(null)
                    localStorage.setItem('user', null);
                }
            })

    }
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/"><strong>Home</strong></Link>
                </li>
                {!props.user && <li>
                    <Link to="/login"><strong>Login</strong></Link>
                </li>}
                {!props.user && <li>
                    <Link to="/signup"><strong>SignUp</strong></Link>
                </li>}
                {props.user && <li>
                    <Link to="/" onClick={handleLogout}><strong>Logout</strong></Link>
                </li>}
            </ul>
        </nav>
    )
}

export default AppNav;