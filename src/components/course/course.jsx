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
} from "./style";
import { Kurs } from "./../../data/course-if-data";
export default function Course() {
  return (
    <React.Fragment>
      <CourseWrap>
        <CourseWrapper>
          {Kurs.map((course, index) => (
            <CourseContent key={index}>
              <Link to={`courseinner/${course.id}`}>
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
              </Link>
            </CourseContent>
          ))}
        </CourseWrapper>
      </CourseWrap>
    </React.Fragment>
  );
}
