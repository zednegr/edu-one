import React, { useRef } from 'react';

// Import Styled components
import { LoginButton, LoginImg, LoginInputWrap, LoginTitle, LoginWrap, LoginWrapLeft, LoginWrapRight, LoginWrapper } from "./Style";

// Import La
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

// PrimeReact
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

// Import Custom Hooks
import useToken from "../../src/hooks/useToken";

// Import Img
import LogoImg from "../../src/assets/logobek.jpg"
import { useContext } from "react";
import { Context } from "../../src/context/authState";
import { Navigate } from "react-router-dom";



export default function Login() {

    const {loginUser, authToken, loginRes, loading} = useContext(Context)
    const toast = useRef(null);

    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Telefon raqam yoki parol notogri', life: 3000});
    }

    if(authToken) {
        return <Navigate to={'/'} /> 
    } else if (loginRes?.response?.status == 401) {
        showError()
    }
    
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }   

    return (
        <>
            <Toast ref={toast} />
            <LoginWrapper>
                <LoginWrap>
                    <LoginWrapLeft />
                    <LoginWrapRight onSubmit={(e) => loginUser(e)}>
                        <LoginImg src={LogoImg} width={150} height={70} />
                        <LoginInputWrap>
                            <Input size="large" placeholder="Login" name="username" />
                        </LoginInputWrap>
                        <LoginInputWrap>
                            <Input.Password
                                name="password"
                                placeholder="Password"
                                size="large"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </LoginInputWrap>
                        <LoginButton>{loading ? 'loading...' : 'Login'}</LoginButton>
                    </LoginWrapRight>
                </LoginWrap>
            </LoginWrapper>
        </>
    )
}