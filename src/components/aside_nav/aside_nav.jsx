import { useEffect, useState } from "react";
import { Aside, AsideButton, AsideName, AsideSize, AsideWrap, FormBtn, FormWrap, FormWrapRadio, FormWrapper, InputWrapper, SidebarContent } from "./style";

import axios from "axios";

import { Sidebar } from 'primereact/sidebar';
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Calendar } from 'primereact/calendar';
import { RadioButton } from "primereact/radiobutton";
import { FileUpload } from 'primereact/fileupload';
import { Password } from 'primereact/password';


function AsideNav(props) {

    const [name, setName] = useState('');
    const [calendar, setCalendar] = useState(null);
    const [checkOne, setCheckOne] = useState('')
    const [checkTwo, setCheckTwo] = useState('')
    const [password, setPassword] = useState('')
    const [img, setImg] = useState('')

    const [visibleRight, setVisibleRight] = useState(false);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown);
    }, [])

    function detectKeyDown(e) {
        if (e.key == 'm') {
            setVisibleRight(true)
        }

        if (e.key == 'l') {
            setVisibleRight(false)
        }
    }

    function onSubmitTeacher(e) {
        e.preventDefault()

        const data = {name}

        fetch(`https://64ca7e11700d50e3c704fadc.mockapi.io/edu`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }

    return (
        <Aside>
            <AsideWrap>
                <AsideName>{props.name}</AsideName>
                <AsideSize>{`miqdori - ${props.size}`}</AsideSize>
            </AsideWrap>
            <AsideButton>
                <Button label="Qo'shish" icon="pi pi-plus" size="small" color="#2F80ED" severity="info" rounded onClick={() => setVisibleRight(true)} />
            </AsideButton>
            <Sidebar visible={visibleRight} position="right" style={{ width: '430px' }} onHide={() => setVisibleRight(false)} >
                {/* <h2>Yangi o'qituvchi qo'shish</h2> */}

                <FormWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Ism</label>
                        <InputText className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Telefon</label>
                        <InputMask mask="99-999-99-99" placeholder="" className="p-invalid" />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Tug’ilgan sana</label>
                        <Calendar value={calendar} onChange={(e) => setCalendar(e.value)} showIcon />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Tug’ilgan sana</label>
                        <FormWrap>
                            <FormWrapRadio>
                                <RadioButton inputId="ingredient1" name="pizza" value='man' onChange={(e) => setCheckOne(e.value)} checked={checkOne === 'man'} />
                                <label htmlFor="ingredient1" className="ml-2">Erkak</label>
                            </FormWrapRadio>
                            <FormWrapRadio>
                                <RadioButton inputId="ingredient2" name="pizza" value='women' onChange={(e) => setCheckTwo(e.value)} checked={checkTwo === 'women'} />
                                <label htmlFor="ingredient2" className="ml-2">Ayol</label>
                            </FormWrapRadio>
                        </FormWrap>
                    </InputWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Foto</label>
                        <FileUpload style={{ width: '100%', backgroundColor: '#fff' }} mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel="Rasim" />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="input-label" htmlFor="username">Parol</label>
                        <Password style={{ width: '100%' }} value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask />
                    </InputWrapper>
                    <FormBtn>
                        <Button label="Qo'shish" severity="info" rounded onClick={onSubmitTeacher} />
                    </FormBtn>
                </FormWrapper>
            </Sidebar>
        </Aside>
    )
}

export default AsideNav