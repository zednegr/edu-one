import styled from "styled-components"

export const Aside = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
`

export const AsideWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0 10px;
`

export const AsideName = styled.h1`

`

export const AsideSize = styled.div`
    color: #424242;
`

export const AsideSearch = styled.input`

`

export const AsideButton = styled.button`

`

export const SidebarContent = styled.div`
    width: 20rem;
`

export const FormWrapper = styled.form`
    padding: 0 0 20px 0;

    input {
        width: 100%;

        &:active {
            box-shadow: none;
        }
    }
`

export const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;

   .input-label {
    margin-bottom: 8px;
   }

   span {
     width: 100%;

     button {
        background-color: #2F80ED;
        box-shadow: none;
     }
   }

   & + & {
      margin-top: 25px;
   }

   .p-button {
    color: #2F80ED;
    border: 1px solid #ced4da;
    background-color: transparent !important;
   }

   .p-button:not(button):not(a):not(.p-disabled):hover {
    color: #2F80ED !important;
    border-color: #ced4da !important;
     }
`

export const FormWrap = styled.div`
   display: flex;
   align-items: center;
   gap: 0 20px;
`

export const FormWrapRadio = styled.div`
    display: flex;
    align-items: center;
    gap: 0 5px;
`
export const FormBtn = styled.div`
    margin-top: 25px;
`