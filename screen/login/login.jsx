// Import Styled components
import { LoginButton, LoginImg, LoginInputWrap, LoginTitle, LoginWrap, LoginWrapLeft, LoginWrapRight, LoginWrapper } from "./Style";

// Import La
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

// Import Custom Hooks
import useToken from "../../src/hooks/useToken";

// Import Img
import LogoImg from "../../src/assets/logobek.jpg"
import { useContext } from "react";
import { Context } from "../../src/context/authState";
import { Navigate } from "react-router-dom";

export default function Login() {

    const {loginUser, authToken} = useContext(Context)

    if(authToken) {
        return <Navigate to={'/'} /> 
    }
    // console.log(loginUser(e));

    return (
        <>
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
                        <LoginButton>Login</LoginButton>
                    </LoginWrapRight>
                </LoginWrap>
            </LoginWrapper>
        </>
    )
}