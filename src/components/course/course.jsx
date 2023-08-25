import React, { useState } from "react";
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
} from "./style";
import { Kurs } from "./../../data/course-if-data";
export default function Course() {
  return (
    <React.Fragment>
      <CourseWrap>
        <CourseWrapper>
          {Kurs.map((course, index) => (
            <CourseContent key={index}>
              <CourseCard>
                <CourseCardTop>
                  <CourseTitle>{course.name}</CourseTitle>
                </CourseCardTop>
                <CourseCardBottom>
                  <CourseDiv>
                    <CourseDescription>{course.name}</CourseDescription>
                    <CoursePrice>
                      {course.money}
                      <CourseCurrensy>{"uzs"}</CourseCurrensy>
                    </CoursePrice>
                  </CourseDiv>
                </CourseCardBottom>
              </CourseCard>
            </CourseContent>
          ))}
        </CourseWrapper>
      </CourseWrap>
    </React.Fragment>
  );
}
