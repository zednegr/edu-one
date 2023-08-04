import AsideNav from "../../components/aside_nav/aside_nav"
import Fixed from "../../components/fixed/fixed"
import Student from "../../components/student/student"

function Students() {
    return(
        <>
           <Fixed content={<Main />} />
        </>
    )
}

function Main() {
    return(
        <>
           <AsideNav name={'Student'} size={'40'} />
            <Student />
        </>
    )
}

export default Students