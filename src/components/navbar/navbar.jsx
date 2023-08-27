import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import { Nav, NavLogo, NavRight } from "./style.js";

import Logo from "../../assets/logobek.jpg";

import "./style.css";

import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";
import useToken from "../../hooks/useToken.js";

export default function Navbar() {

  const menuRight = useRef(null);
  // const [loginOut, setLoginOut] = useState(false);

  // if (loginOut == true) {
  //   return <Navigate to={"/login"} replace />;
  // }

  const [, setToken] = useToken()


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
            setToken(false)
          },
        },
      ],
    },
  ];

  return (
    <Nav>
      <NavLogo src={Logo} />
      <NavRight>
        <i
          className="pi pi-bell p-overlay-badge"
          style={{ fontSize: "1.2rem" }}
        >
          <Badge value="2" severity="info"></Badge>
        </i>
        <i
          className="pi pi-envelope p-overlay-badge"
          style={{ fontSize: "1.2rem" }}
        >
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
        {/* <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup /> */}
      </NavRight>
    </Nav>
  );
}
