import { useEffect, useState } from "react";
import { Aside, AsideButton, AsideName, AsideSize, AsideWrap, FormWrap, FormWrapRadio, FormWrapper, InputWrapper, SidebarContent } from "./style";

import { Sidebar } from 'primereact/sidebar';
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Calendar } from 'primereact/calendar';
import { RadioButton } from "primereact/radiobutton";

function AsideNav(props) {

    const [name, setName] = useState('');
    const [calendar, setCalendar] = useState(null);
    const [checkOne, setCheckOne] = useState()
    const [checkTwo, setCheckTwo] = useState()

    const [visibleRight, setVisibleRight] = useState(false);

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
                <h2>Yangi o'qituvchi qo'shish</h2>

                <FormWrapper>
                    <InputWrapper>
                        <label htmlFor="username">Ism</label>
                        <InputText className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="username">Telefon</label>
                        <InputMask mask="99-999-99-99" placeholder="" className="p-invalid" />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="username">Tug’ilgan sana</label>
                        <Calendar value={calendar} onChange={(e) => setCalendar(e.value)} showIcon />
                    </InputWrapper>
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
                </FormWrapper>
            </Sidebar>
        </Aside>
    )
}

export default AsideNav