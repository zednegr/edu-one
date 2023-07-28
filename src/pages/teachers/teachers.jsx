import Fixed from "../../components/fixed/fixed"
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
      </>
    )
}


export default Teacher