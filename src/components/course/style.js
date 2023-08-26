import styled from "styled-components"

export const CourseWrap = styled.section`
`
export const CourseWrapper = styled.div`
display:flex;
justify-content:space-between;
gap:2rem;
flex-wrap:wrap;

`
export const CourseContent = styled.div`  
height:300px;
width:100%;
max-width:310px;
border-radius:15px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
background-color:white;


`
export const CourseCard = styled.div`
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;
cursor:pointer;
transition:.4s linear;
&:hover{
    transition:.4s linear;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius:15px;
}
`
export const CourseTitle = styled.p`
font-size:18px;
color:royalblue !important;
font-weight:500`


export const CourseCurrensy = styled.span` `



export const CourseDescription = styled.p` 
color:#001 !important;
font-weight:400;
font-size:16px;
`
export const CoursePrice = styled.p`
display:flex;
gap:0 0.5em;
color:grey;
font-size:14px;
`
export const CourseDiv = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
gap:0.5rem 0;
border-radius:0 0 15px 15px;
`


export const CourseCardTop = styled.div`
height:60%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
border-radius:15px 15px 0 0;
`

export const CourseCardBottom = styled.div` 
height:40%;
border-radius: 0 0 15px 15px;
padding:0 1.5rem;
border-top:1px solid grey;

`