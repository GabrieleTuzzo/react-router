import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/chisiamo">Chi Siamo</NavLink>
            <NavLink to="/posts">Post List</NavLink>
        </nav>
    );
}
