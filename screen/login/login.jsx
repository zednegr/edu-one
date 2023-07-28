import { useState } from "react";

import { LoginButton, LoginImg, LoginInputWrap, LoginTitle, LoginWrap, LoginWrapLeft, LoginWrapRight, LoginWrapper } from "./Style";

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';


import LogoImg from "../../src/assets/logobek.jpg"

export default function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <LoginWrapper>
                <LoginWrap>
                    <LoginWrapLeft />
                    <LoginWrapRight>
                        <LoginImg src={LogoImg} width={150} height={70} />
                        {/* <LoginTitle>Sign Up</LoginTitle> */}
                        <LoginInputWrap>
                            <Input size="large" placeholder="Login" />
                        </LoginInputWrap>
                        <LoginInputWrap>
                            <Input.Password
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