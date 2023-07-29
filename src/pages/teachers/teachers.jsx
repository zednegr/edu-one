import Fixed from "../../components/fixed/fixed"
import TeacherCard from "../../components/teacher/teacher_card/teacher_card"
import { TeacherTitle } from "./style"

function Teacher() {
    return(
        <>
          <Fixed content={<Main />} />
        </>
    )
}

function Main() {
    return(
      <>
        <TeacherTitle>O'qituvchilar</TeacherTitle>
        <TeacherCard />
      </>
    )
}


export default Teacher