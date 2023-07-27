import { Nav, NavLogo} from "./navbar";

import Logo from "../../assets/logobek.jpg"
import "./style.css"

export default function Navbar() {
    return (
        <Nav>
            <NavLogo src={Logo} />
        </Nav>
    )
}