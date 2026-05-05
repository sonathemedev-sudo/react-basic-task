import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar_wrapper">
            <div className="container">
                <ul className="menu_list">
                    <li className="menu_link"><a href="#">About</a></li>
                    <li className="menu_link"><a href="#">My Projects</a></li>
                    <li className="menu_link"><a href="#">Skills</a></li>
                    <li className="menu_link"><a href="#">Expertise</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;