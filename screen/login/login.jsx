import { useState } from "react";

import { LoginButton, LoginImg, LoginInputWrap, LoginTitle, LoginWrap, LoginWrapLeft, LoginWrapRight, LoginWrapper } from "./Style";

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import useToken from "../../src/hooks/useToken";

import LogoImg from "../../src/assets/logobek.jpg"

export default function Login() {

    const [, setToken] = useToken()

    const [passwordVisible, setPasswordVisible] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault() 

        const {username, password} = evt.target.elements

        setToken({
            username: username.value,
            password: password.value
        })
    }

    return (
        <>
            <LoginWrapper>
                <LoginWrap>
                    <LoginWrapLeft />
                    <LoginWrapRight onSubmit={handleSubmit}>
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
                        <LoginButton>Login</LoginButton>
                    </LoginWrapRight>
                </LoginWrap>
            </LoginWrapper>
        </>
    )
}