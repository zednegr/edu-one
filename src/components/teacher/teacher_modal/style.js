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
padding: 25px 30px;
    width: 450px;
    height: 751px;
    background-color: #fff;
    border-radius: 15px;
`

export const TeacherModalInnerTop = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const TeacherModalInnerTopTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1px;
`

export const TeacherModalInnerTopBtn = styled.button`
    font-size: 20px;
`

export const TeacherModalInnerMain = styled.form`
   display: flex;
   flex-direction: column;
   gap: 15px 0;
`

export const TeacherModalLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: #6A6C72;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    text-transform: capitalize;
`



