import { useContext, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Nav, NavLogo, NavRight } from "./style.js";

import Logo from "../../assets/logobek.jpg";

import "./style.css";

import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";

import { Context } from "../../context/authState.jsx";
import useLang from "../../hooks/useLang.js";

export default function Navbar() {

  const {logOut} = useContext(Context)
  const [lang, setLang] = useLang()

  const menuRight = useRef(null);
  const menuLanguage = useRef(null);

  const navigate = useNavigate()
  // const [loginOut, setLoginOut] = useState(false);

  // if (loginOut == true) {
  //   return <Navigate to={"/login"} replace />;
  // }

  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            // toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            window.location.reload();
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "Website It-Station",
          icon: "pi pi-external-link",
          url: "http://www.itstation.uz/",
        },
        {
          label: "Chiqish",
          icon: "pi pi-sign-out",
          command: (e) => {
            logOut()
          },
        },
      ],
    },
  ];

  const language = [
        {
          label: "English",
          icon: "pi pi-language",
          command: (e) => {
            setLang('en')
          },
        },
        {
          label: "Русский",
          icon: "pi pi-language",
          command: (e) => {
            setLang('ru')
          },
        },
        {
          label: "O`zbekcha",
          icon: "pi pi-language",
          command: (e) => {
            setLang('uz')
          },
        },     
  ];

  return (
    <Nav>
      <NavLogo src={Logo} />
      <NavRight>
       <i
          className="pi pi-language
          p-overlay-badge"
          style={{ fontSize: "1.2rem" }} 
          onClick={(e) =>  menuLanguage.current.toggle(e)}></i>

        <i
          className="pi pi-bell p-overlay-badge"
          style={{ fontSize: "1.2rem" }}>
          <Badge value="2" severity="info"></Badge>
        </i>

        <i
          className="pi pi-inbox p-overlay-badge"
          style={{ fontSize: "1.2rem" }}>
          <Badge severity="danger"></Badge>
        </i>

        <i className="pi pi-cog" style={{ fontSize: "1.3rem" }}></i>
        
        <Avatar
          className="p-overlay-badge nav-avatar"
          icon="pi pi-user"
          shape="circle"
          onClick={(event) => menuRight.current.toggle(event)}
        />
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />
        <Menu
          model={language}
          popup
          ref={menuLanguage}
          id="popup_menu_right"
          popupAlignment="right"
        />
        {/* <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup /> */}
      </NavRight>
    </Nav>
  );
}
