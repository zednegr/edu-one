import styled from "styled-components";

export const CourseWrap = styled.section``;
export const CourseWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const CourseContent = styled.div`
  height: 270px;
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: white;
`;

export const CourseCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  transition: 0.4s linear;
  border-radius: 15px;

  &:hover {
    transition: 0.4s linear;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 15px;
  }
`;

export const CourseTitle = styled.p`
  font-size: 23px;
  font-weight: 600;
  color: #ffffff;
`;

export const CourseCurrensy = styled.span`
  text-transform: capitalize;
`;

export const CourseDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #6a6c72;
`;
export const CourseColor = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius:15px 15px 0 0;

`;
export const CoursePrice = styled.p`
  display: flex;
  gap: 0 0.5em;
  color: grey;
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #6a6c72;
`;

export const CourseDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem 0;
  border-radius: 0 0 15px 15px;
`;
export const CourseImg = styled.img`
  width: 157.266px;
  height: 89.694px;
  flex-shrink: 0;
`;

export const CourseImgBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px 15px 0 0;
`;

export const CourseCardTop = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(180deg, #24a2fd 0%, rgba(37, 162, 254, 0.4) 100%);
  border-radius: 15px 15px 0 0;
`;

export const CourseCardBottom = styled.div`
  height: 35%;
  border-radius: 0 0 15px 15px;
  padding: 0 1.5rem;
`;
