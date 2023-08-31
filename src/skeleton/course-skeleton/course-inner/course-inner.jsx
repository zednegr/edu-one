import React from "react";
import { Skeleton } from "antd";
import { CourseInnerDetail, CourseInnerDiv, CourseInnerTop } from "../style";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function course_inner_skeleton() {
  return (
    <React.Fragment>
      <CourseInnerContainer>
        <CourseInnerTop>
          <Skeleton.Input />
        </CourseInnerTop>
        {data.map((item, index) => (
          <CourseInnerDiv key={index}>
            <CourseInnerDetail>
              <Skeleton.Input
                size="large"
                active={true}
                style={{ width: "100%", height: "100%" }}
              />
            </CourseInnerDetail>
          </CourseInnerDiv>
        ))}
      </CourseInnerContainer>
    </React.Fragment>   
  );
}
