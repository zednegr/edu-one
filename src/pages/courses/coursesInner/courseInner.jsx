import React from "react";
import Fixed from "../../../components/fixed/fixed";
import { Kurs } from "./../../../data/course-if-data";
import Coursecard from "../../../components/course/coursecard/coursecard";
import {
  CourseCard,
  CourseCardAbout,
  CourseCardBottom,
  CourseCardImg,
  CourseCardName,
  CourseCardNumber,
  CourseCardPicture,
  CourseCardTitle,
  CourseCardTop,
  CourseInnerContainer,
  CourseInnerWrapper,
} from "./style";

function CourseInner() {
  return (
    <React.Fragment>
      <Fixed content={<Main />} />
    </React.Fragment>
  );
}
function Main() {
  return (
    <React.Fragment>
      <CourseInnerWrapper>
        <CourseInnerContainer>
          {Kurs.slice(0, 1).map((item, index) => (
            <CourseCard key={index}>
              <CourseCardTop>
                <CourseCardPicture>
                  <CourseCardImg
                    src={item.img}
                    alt="This is a course card img"
                  />
                </CourseCardPicture>
                <CourseCardTitle>{item.name}</CourseCardTitle>
              </CourseCardTop>
              <CourseCardBottom>
                <CourseCardAbout>
                  <CourseCardName>{"kurs soni"}</CourseCardName>
                  <CourseCardNumber>{item.number}</CourseCardNumber>
                </CourseCardAbout>
                <CourseCardAbout>
                  <CourseCardName>{"narxi"}</CourseCardName>
                  <CourseCardNumber>
                    {item.money} {"So'm"}
                  </CourseCardNumber>
                </CourseCardAbout>
              </CourseCardBottom>
            </CourseCard>
          ))}
          <Coursecard/>
        </CourseInnerContainer>
      </CourseInnerWrapper>
    </React.Fragment>
  );
}

export default CourseInner;
