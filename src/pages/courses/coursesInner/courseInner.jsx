import React from "react";
import NavbarLeft from "../../../components/navbar-left/navbar-left";
import Fixed from "../../../components/fixed/fixed";
import { CourseInnerContainer, CourseInnerWrapper } from "./style";

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
        
      </CourseInnerContainer>
    </CourseInnerWrapper>
    </React.Fragment>
  );
}

export default CourseInner;
