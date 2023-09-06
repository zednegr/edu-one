import { styled } from "styled-components";


export const LoginWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: -70px;
`

export const LoginWrap = styled.div`
    display: flex;
    width: 750px;
    height: 550px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;

    @media only screen and (max-width: 765px) {
        width: 550px;
    }

    @media only screen and (max-width: 570px) {
        width: 100%;
        padding: 0 20px;
    }

    @media only screen and (max-width: 425px) {
        height: 450px;
    }
`

export const LoginWrapLeft = styled.div`
    width: 300px;
    height: 550px;
    background: url("https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60") no-repeat;
    background-size: cover;
    border-radius: 10px 0 0 10px;

    @media only screen and (max-width: 765px) {
        display: none;
        width: 550px;
    }
`

export const LoginWrapRight = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    height: 550px;
    background-color: #fff;
    border-radius: 0 10px 10px 0;

    @media only screen and (max-width: 765px) {
        width: 100%;
        padding: 0 70px;
    }

    @media only screen and (max-width: 425px) {
        padding: 0 50px;
    }

    @media only screen and (max-width: 425px) {
        height: 450px;
        padding: 0 30px;
    }
`

export const LoginImg = styled.img`
    margin-bottom: 20px;
`

export const LoginInputWrap = styled.div`
    width: 55%;

    & + & {
        margin-top: 20px;
    }

    @media only screen and (max-width: 765px) {
        width: 100%;
    }
`

export const LoginButton = styled.button`
    margin-top: 20px;
    width: 55%;
    height: 45px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    background-color: #FFC619;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media only screen and (max-width: 765px) {
        width: 100%;
    }
`