import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CourseCard,
  CourseCardBottom,
  CourseCardTop,
  CourseContent,
  CourseCurrensy,
  CourseDescription,
  CourseDiv,
  CoursePrice,
  CourseTitle,
  CourseWrap,
  CourseWrapper,
  CourseImg,
  CourseImgBox,
  CourseColor,
} from "./style";
import { Kurs } from "./../../data/course-if-data";
export default function Course() {
  return (
    <React.Fragment>
      <CourseWrap>
        <CourseWrapper>
          {Kurs.map((course, index) => (
            <CourseContent key={index}>
              <Link to={`courseinner`}>
                <CourseCard>
                  <CourseCardTop>
                    <CourseColor>
                      <CourseImgBox>
                        <CourseImg src={course.img} alt="This is a logo img" />
                      </CourseImgBox>
                      <CourseTitle>{course.name}</CourseTitle>
                    </CourseColor>
                  </CourseCardTop>
                  <CourseCardBottom>
                    <CourseDiv>
                      <CourseDescription>{course.price}</CourseDescription>
                      <CoursePrice>
                        {course.money}
                        <CourseCurrensy>{"so'm"}</CourseCurrensy>
                      </CoursePrice>
                    </CourseDiv>
                  </CourseCardBottom>
                </CourseCard>
              </Link>
            </CourseContent>
          ))}
        </CourseWrapper>
      </CourseWrap>
    </React.Fragment>
  );
}
