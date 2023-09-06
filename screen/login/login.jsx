import React, { useRef } from 'react';

// Import Styled components
import { LoginButton, LoginImg, LoginInputWrap, LoginWrap, LoginWrapLeft, LoginWrapRight, LoginWrapper } from "./Style";

// Import La
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Spin } from 'antd';


// Import Img
import LogoImg from "../../src/assets/logobek.jpg"
import { useContext } from "react";
import { Context } from "../../src/context/authState";
import { Navigate } from "react-router-dom";



export default function Login() {

    const {loginUser, authToken, loading, contextHolder, loginInputValid} = useContext(Context)
    const toast = useRef(null);

    if(authToken) {
        return <Navigate to={'/'} /> 
    }

    return (
        <>
        {contextHolder}
            <LoginWrapper>
                <LoginWrap>
                    <LoginWrapLeft />
                    <LoginWrapRight onSubmit={(e) => loginUser(e)}>
                        <LoginImg src={LogoImg} width={150} height={70} />
                        <LoginInputWrap>
                            <Input 
                                size="large" 
                                placeholder="Login" 
                                name="username" 
                                status={loginInputValid == 'access' ? null : 
                                        loginInputValid == 'error' ? 'error' :  
                                        loginInputValid == 'warning' ? 'warning' : null}
                             />
                        </LoginInputWrap>
                        <LoginInputWrap>
                            <Input.Password
                                name="password"
                                placeholder="Password"
                                status={loginInputValid == 'access' ? null :
                                        loginInputValid == 'error' ? 'error' :
                                        loginInputValid == 'warning' ? 'warning' : null}
                                size="large"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </LoginInputWrap>
                        <LoginButton>{loading ? <Spin /> : 'Login'}</LoginButton>
                    </LoginWrapRight>
                </LoginWrap>
            </LoginWrapper>
        </>
    )
}