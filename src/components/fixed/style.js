import styled from "styled-components"

export const FixWrapper = styled.section`
    display: flex;
    padding: 15px;
`

export const FixContent = styled.div`
   padding: 0 0 0 25px;
   width: 92.5%;
   margin-left: auto;
   /* height: 90vh; */
   /* overflow-y: auto; */

   @media only screen and (max-width: 1050px) {
    width: 100%;
    padding: 0;
   }
`