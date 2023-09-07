import React, { useContext, useState } from "react";
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
import { useCourseData } from "../../api/useCourseApi";
import SiteLoading from "../site_loading/site_loading";
import { LengthContext } from "../../context/dataLength";

export default function Course() {

 const {data, isLoading, isError, error} = useCourseData();

 const {lengthData, setLengthData} = useContext(LengthContext);

 setLengthData(data?.data?.length)

 if(isLoading) {
  return <SiteLoading />
 }

  return (
    <React.Fragment>
      <CourseWrap>
        <CourseWrapper>
          {data?.data?.map((course, index) => (
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
                      <CourseDescription>Narxi</CourseDescription>
                      <CoursePrice>
                        {course.price}
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
