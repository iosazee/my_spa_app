import {Link} from "react-router-dom";
import { navStyle } from "./styles";


const Navigation = () => {
    return (
        <nav style={navStyle.nav}>
            <Link to="/">
                <button style={navStyle.navButton}>Home</button>
            </Link>
            <Link to="/shutterspeed">
                <button style={navStyle.navButton}>Shutter Speed</button>
            </Link>
            <Link to="/aperture">
                <button style={navStyle.navButton}>Aperture</button>
            </Link>
            <Link to="/iso">
                <button style={navStyle.navButton}>ISO</button>
            </Link>
            <Link to="/contactus">
                <button style={navStyle.navButton}>Contact Us</button>
            </Link>
        </nav>
    )
}

export default Navigation;