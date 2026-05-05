import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar_wrapper">
            <div className="container">
                <ul className="menu_list">
                    <li className="menu_link">About</li>
                    <li className="menu_link">My Projects</li>
                    <li className="menu_link">Skills</li>
                    <li className="menu_link">Expertise</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;