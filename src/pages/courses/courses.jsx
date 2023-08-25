import React from "react";
import Fixed from "../../components/fixed/fixed";
import Course from "../../components/course/course";
import AsideNav from "../../components/aside_nav/aside_nav";
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
      <AsideNav name={"Kurslar"} size={"40"} />
      <Course />
    </React.Fragment>
  );
}
