import styled from "styled-components";

export const TeacherCardWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px 15px 20px;
    width: 400px;
    height: 90px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
`

export const TeacherCardBox = styled.div`
     display: flex;
     align-items: center;
     gap: 17px;
     position: relative;
`

export const TeacherCardAvatar = styled.img`
     width: 50px;
     height: 50px;
     border-radius: 50%;
`

export const TeacherCardCon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px 0;
`

export const TeacherCardName = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: var(--grey-blue-60, #6B7A99);
`

export const TeacherCardJob = styled.div`
    color: var(--grey-blue-80, #ADB8CC);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`