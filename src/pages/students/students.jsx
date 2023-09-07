import { useContext } from "react"
import AsideNav from "../../components/aside_nav/aside_nav"
import Fixed from "../../components/fixed/fixed"
import Student from "../../components/student/student"
import { LengthContext } from "../../context/dataLength"

function Students() {
    return(
        <>
           <Fixed content={<Main />} />
        </>
    )
}

function Main() {

    const {lengthData, setLengthData} = useContext(LengthContext)

    return(
        <>
           <AsideNav name={'Student'} size={lengthData} />
            <Student />
        </>
    )
}

export default Students