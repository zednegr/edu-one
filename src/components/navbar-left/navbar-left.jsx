import { NavLeft, NavLeftItem, NavLeftItemText, NavLeftList } from "./style.js";
import { navbar_lf_data } from "../../data/navbar-lf-data.js";
import { NavLink } from "react-router-dom";

function NavbarLeft() {
  return (
    <NavLeft>
      <NavLeftList>
        {navbar_lf_data.map((item) => {
          return (
            <NavLink to={item.link}>
              <NavLeftItem>
                <i className={item.img} style={{ color: "slateblue" }}></i>
                <NavLeftItemText>{item.name}</NavLeftItemText>
              </NavLeftItem>
            </NavLink>
          );
        })}
      </NavLeftList>
    </NavLeft>
  );
}

export default NavbarLeft;
