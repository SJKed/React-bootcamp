import logo from '../logo.svg';
import '../styles/components/header.css';

function Header() {
    return (
        <div className="Header">
            <a href="/">
                <img src={logo} className="HeaderLogo" alt="logo" />
            </a>
            <div className="HeaderLinks">
                <a href='/ComponentsAndProps'>ComponentsAndProps</a>
                <a href='/conditionals'>Conditionals</a>
                <a href='/events'>Events</a>
                <a href='/lifecycle'>Lifecycle</a>
                <a href='/shakespear'>Shakespear</a>
                <a href='/styling'>Styling</a>
            </div>
        </div>
    );
}

export default Header;