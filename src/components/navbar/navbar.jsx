import { Nav, NavLogo, NavRight } from "./style.js";

import Logo from "../../assets/logobek.jpg"
import "./style.css"

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menu } from 'primereact/menu';
import { useRef } from "react";

export default function Navbar() {

    const menuRight = useRef(null);


    return (
        <Nav>
            <NavLogo src={Logo} />


            <NavRight>
                <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.2rem' }}>
                    <Badge value="2" severity="info"></Badge>
                </i>
                <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '1.2rem' }}>
                    <Badge severity="danger"></Badge>
                </i>
                <i className="pi pi-cog" style={{ fontSize: '1.3rem' }}></i>
                <Avatar className="p-overlay-badge nav-avatar" icon="pi pi-user" shape="circle"  />
            </NavRight>
        </Nav>
    )
}