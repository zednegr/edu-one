import { Nav, NavLogo } from "./style.js";
import { AutoComplete } from "primereact/autocomplete";



import Logo from "../../assets/logobek.jpg"
import "./style.css"
import { useState } from "react";

export default function Navbar() {



    return (
        <Nav>
            <NavLogo src={Logo} />
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />

        </Nav>
    )
}