import { useState } from "react";
import { Aside, AsideButton, AsideName, AsideSize, AsideWrap, SidebarContent } from "./style";

import { Sidebar } from 'primereact/sidebar';
import { Button } from "primereact/button"


function AsideNav({ name, size }) {

    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <Aside>
            <AsideWrap>
                <AsideName>{name}</AsideName>
                <AsideSize>{`miqdori - ${size}`}</AsideSize>
            </AsideWrap>
            <AsideButton>
                <Button label="Qo'shish" icon="pi pi-plus" size="small" color="#2F80ED" severity="info" rounded onClick={() => setVisibleRight(true)} />
            </AsideButton>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className="md:w-20rem p-sidebar-md" >
                    <h2>Right Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </Sidebar>
        </Aside>
    )
}

export default AsideNav