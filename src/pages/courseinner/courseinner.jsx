import React from "react";
import NavbarLeft from "../../components/navbar-left/navbar-left";
import { useParams } from "react-router-dom";
import Fixed from "../../components/fixed/fixed";

export default function Courseinner() {
  return (
    <React.Fragment>
      <Fixed content={Main} />
    </React.Fragment>
  );
}
function Main  ()  {
  return (
    <React.Fragment>
      <NavbarLeft />
    </React.Fragment>
  );
};
