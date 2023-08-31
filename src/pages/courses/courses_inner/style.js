import {styled} from "styled-components"
export const CourseInnerWrapper = styled.section``;

export const CourseInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CourseCard = styled.div`
  width: 500px;
  height: 427px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
  background: #fff;
 position: sticky;
 top: 90px;
  cursor: pointer;

  &:hover{
    transition: all .5s linear;
    img{
      transform: translateX(30px);
      transition: all .5s linear;
    }
  }
`;

export const CourseCardTop = styled.div`
  height: 240px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 34px 0 54px 0;
  border-radius: 5px;
  background: linear-gradient(180deg, #fdc624 0%, #e6c434 100%);
  transition: all .5s linear;
  cursor: pointer;
`;

export const CourseCardPicture = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CourseCardImg = styled.img`
  width: 188.719px;
  height: 121.377px;
  flex-shrink: 0;
  object-fit: contain;
  transition: all .5s linear;
`;

export const CourseCardTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
`;

export const CourseCardBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem 0;
  padding: 25px 30px 29px 20px;

`;

export const CourseCardAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:0.4rem 0;

`;

export const CourseCardName = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #6a6c72;
  text-transform: capitalize;
`;

export const CourseCardNumber = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  color: #6a6c72;
`;
