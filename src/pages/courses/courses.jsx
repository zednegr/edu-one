import React from "react";
import Fixed from "../../components/fixed/fixed";
import Course from "../../components/course/course";
import Newcourse from "../../components/addcourse/addcourse";
export default function Courses() {
  return (
    <React.Fragment>
      <Fixed content={<Main />} />
    </React.Fragment>
  );
}
function Main() {
  return (
    <React.Fragment>
      <Newcourse name={"Kurslar"} size={"5"} />
      <Course />
    </React.Fragment>
  );
}
