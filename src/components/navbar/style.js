import styled, { keyframes } from 'styled-components';

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 30px;
    height: 70px;
    background-color: #fff;
    border-radius: 0 0 15px 15px;
   box-shadow: 0 1px 15px rgba(0,0,0,.07), 0 1px 6px rgba(0,0,0,.07);
   z-index:90;
`

export const NavLogo = styled.img`
    width: 90px;
    height: 40px;
`

export const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
