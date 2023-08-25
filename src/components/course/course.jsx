import React, { useState } from "react";
import { CourseLi, CourseUl, CourseWrap } from "./style";
import { Kurs } from './../../data/course-if-data';
export default function Course() {
  return (
    <React.Fragment>
      <CourseWrap>
        <CourseUl>
          {Kurs.map((course, index) => (
            <CourseLi key={index}>
              {course.name}
            </CourseLi>
          ))}
        </CourseUl>
      </CourseWrap>
    </React.Fragment>
  );
}
