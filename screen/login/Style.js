import { styled } from "styled-components";

export const LoginWrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
     /* width: 100%;
     height: 100vh; */
`

export const LoginWrap = styled.div`
    display: flex;
    width: 900px;
    height: 600px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 6px;
`

export const LoginWrapLeft = styled.div`
    width: 400px;
    height: 600px;
    background: url("https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60") no-repeat;
    background-size: cover;
    border-radius: 6px 0 0 6px;

`

export const LoginWrapRight = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
    width: 500px;
    height: 600px;
    background-color: #fff;
`

export const LoginImg = styled.img`

`

export const LoginTitle = styled.div`
     margin: 15px 0;
     font-size: 24px;
     font-weight: 600;
`

export const LoginInputWrap = styled.div`
    width: 55%;

    & + & {
        margin-top: 20px;
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
`