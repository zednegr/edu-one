import styled from "styled-components"

export const NavLeft = styled.nav`
   position: fixed;
   height: 88%;
   background-color: #fff;
   border-radius: 14px;
   z-index: 111;

   @media only screen and (max-width: 1050px) {
      bottom: 20px;
      width: 97%;
      height: 100px;
   }

   @media only screen and (max-width: 765px) {
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 80px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 1px 15px 0 grey;
   }
`
export const NavLeftList = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 8px;
   gap: 25px 0;
   a {
    color: #000000;
   }
   .active{
    i{
        color:#2F80ED !important;
    }
    div{
        color:#2F80ED !important;
    }
   }

   @media only screen and (max-width: 1050px) {
       flex-direction: row;
       justify-content: space-around;
   }

   @media only screen and (max-width: 765px) {
     padding: 10px;
   }
`

export const NavLeftItemText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1px;
`

export const NavLeftItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px 0;
    padding: 8px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.2s ease;
    cursor: pointer;

    i {
        font-size: 30px;
        font-weight: 500;
        color: #8E8E93 !important;
    }

    &:hover {
        background: rgba(47, 128, 237, 0.10);

        i {
            color: #2F80ED !important;
        }

        ${NavLeftItemText} {
            color: #2F80ED ;
        }
    }

    @media only screen and (max-width: 765px) {
        i {
            font-size: 20px;
        }
    }
`

// ! does not work
export const NavLeftItemImg = styled.img`
    width: 45px;
    height: 45px;
`