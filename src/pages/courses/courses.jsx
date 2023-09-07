import React, { useContext } from "react";
import Fixed from "../../components/fixed/fixed";
import Course from "../../components/course/course";
import Newcourse from "../../components/addcourse/addcourse";
import { LengthContext } from "../../context/dataLength";
export default function Courses() {
  return (
    <React.Fragment>
      <Fixed content={<Main />} />
    </React.Fragment>
  );
}
function Main() {

  const {lengthData, setLengthData} = useContext(LengthContext)

  return (
    <React.Fragment>
      <Newcourse name={"Kurslar"} size={lengthData} />
      <Course />
    </React.Fragment>
  );
}
