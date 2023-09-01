import { useRef } from "react";

import { useQuery } from 'react-query'

import { TeacherCardAvatar, TeacherCardBox, TeacherCardCon, TeacherCardJob, TeacherCardName, TeacherCardWrap } from "./style";

import "./style.css";

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

import { Skeleton } from 'antd';



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

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://64ca7e11700d50e3c704fadc.mockapi.io/edu').then(res =>
            res.json()
        )
    )

    if (isLoading) return <Skeleton />

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            {
                data.map(item => {
                    return (
                        <TeacherCardWrap key={item.id} className="card" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}>
                            <TeacherCardBox>
                                <TeacherCardAvatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                                <TeacherCardCon>
                                    <TeacherCardName>{item.name}</TeacherCardName>
                                    <TeacherCardJob>Frontend</TeacherCardJob>
                                </TeacherCardCon>

                            </TeacherCardBox>


                            <Button icon="pi pi-ellipsis-h teacher-set" style={{ boxShadow: 'none', color: '#C3CAD9', width: '40px', height: '40px' }} rounded text aria-label="Cancel" onClick={(event) => menuRight.current.toggle(event)} />
                            <Menu model={items} popup ref={menuRight} style={{ width: '150px', color: 'red' }} />

                        </TeacherCardWrap>
                    )
                })
            }
        </>
    )
}

export default TeacherCard