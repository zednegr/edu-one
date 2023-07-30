import { useRef } from "react";
import { TeacherCardAvatar, TeacherCardBox, TeacherCardCon, TeacherCardJob, TeacherCardName, TeacherCardWrap } from "./style";

import "./style.css";

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';


function TeacherCard() {

    const menuRight = useRef(null);

    const items = [
        {
            label: 'Tahrirlash',
            icon: 'pi pi-user-edit',
            command: (e) => {

            }
        },
        {
            label: "O'chirish",
            icon: 'pi pi-trash',
            command: (e) => {
                setLoginOut(true)
            }
        }
    ];


    return (
        <TeacherCardWrap className="card" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}>
            <TeacherCardBox>
                <TeacherCardAvatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                <TeacherCardCon>
                    <TeacherCardName>Abdullox</TeacherCardName>
                    <TeacherCardJob>Frontend</TeacherCardJob>
                </TeacherCardCon>

            </TeacherCardBox>


            <Button icon="pi pi-ellipsis-v teacher-set" style={{ boxShadow: 'none', color: '#C3CAD9', width: '40px', height: '40px' }} rounded text aria-label="Cancel" onClick={(event) => menuRight.current.toggle(event)} />
            <Menu model={items} popup ref={menuRight} style={{width: '150px', color: 'red'}} />

        </TeacherCardWrap>
    )
}

export default TeacherCard