import { NavLeft, NavLeftItem, NavLeftItemImg, NavLeftList } from "./navbar-left.js"
import { navbar_lf_data } from "../../data/navbar-lf-data.js"

function NavbarLeft() {
    return (
        <NavLeft>
            <NavLeftList>
                {navbar_lf_data.map(item => {
                    return (
                        <NavLeftItem>
                            <NavLeftItemImg src={item?.img} />
                            {item.name}
                        </NavLeftItem>
                    )
                })}
            </NavLeftList>
        </NavLeft>
    )
}

export default NavbarLeft