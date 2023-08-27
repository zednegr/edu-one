import React from "react";
import { TeacherModalInner, TeacherModalWrap } from "./style";

function TeacherModal({open, setOpen}) {

    function handleClose(evt) {
       if(evt.target.matches('#modal')) {
            setOpen(false)
       }
    }

    return(
        <TeacherModalWrap open={open} id="modal" onClick={handleClose}>
            <TeacherModalInner></TeacherModalInner>
        </TeacherModalWrap>
    )
}

export default TeacherModal