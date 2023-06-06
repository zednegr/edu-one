import { Nav, NavLogo, NavSearch } from "./navbar";

import Logo from "../../assets/logobek.jpg"

export default function Navbar() {
    return (
        <Nav>
            <NavLogo src={Logo} />
            <NavSearch />
        </Nav>
    )
}