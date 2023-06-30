import styled, { keyframes } from 'styled-components';

export const Nav = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
`

export const NavLogo = styled.img`
    width: 100px;
    height: 50px;
`

export const NavSearch = styled.input`
    width: 300px;
    height: 35px;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 500;
    color: grey;
    border-radius: 30px;
    border: 0.5px solid grey;
`

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
padding: 10px 20px;
background: #4285f4;
color: #fff;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
animation: ${pulseAnimation} 1s ease-in-out infinite;
`;