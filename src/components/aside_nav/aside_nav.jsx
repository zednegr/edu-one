import { useState, memo } from "react";
import { Aside, AsideButton, AsideName, AsideSize, AsideWrap } from "./style";

import { Button } from "primereact/button";
import TeacherModal from "../teacher/teacher_modal/teacher_modal";

function AsideNav(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Aside>
      <AsideWrap>
        <AsideName>{props.name}</AsideName>
        <AsideSize>{`miqdori - ${props.size}`}</AsideSize>
      </AsideWrap>
      <AsideButton>
        <Button
          label={props.name}
          icon="pi pi-plus"
          size="small"
          color="#2F80ED"
          severity="info"
          rounded
          onClick={() => (props.on == "teacher" ? setOpenModal(true) : "")}
        />
      </AsideButton>
      <TeacherModal open={openModal} setOpen={setOpenModal} />
    </Aside>
  );
}

export default memo(AsideNav);
