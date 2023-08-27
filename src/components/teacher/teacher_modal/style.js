import styled from "styled-components";

export const TeacherModalWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(0.5px);
    z-index: 111;
    transition: all 0.1s ease;
    opacity: ${props => props.open ? 1 : 0};
    pointer-events: ${props => props.open ? 'auto' : 'none'};
`

export const TeacherModalInner = styled.div`
    width: 450px;
    height: 751px;
    background-color: #fff;
    border-radius: 15px;

`