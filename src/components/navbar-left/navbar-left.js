import styled from "styled-components"

export const NavLeft = styled.nav`
   width: 250px;
   height: 90vh;
   background-color: #fff;
   border-radius: 14px;
`
export const NavLeftList = styled.ul`
   display: flex;
   flex-direction: column;
   padding: 24px;
   gap: 10px 0;
`

export const NavLeftItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0 24px;
    padding: 8px 8px 8px 14px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1px;
    border-radius: 10px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        background: rgba(47, 128, 237, 0.10);
    }
`

export const NavLeftItemImg = styled.img`
    width: 24px;
    height: 24px;
`