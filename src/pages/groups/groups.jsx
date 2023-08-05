import AsideNav from "../../components/aside_nav/aside_nav"
import Fixed from "../../components/fixed/fixed"
import Group from "../../components/group/group"

function Groups() {
    return (
        <>
            <Fixed content={<Main />} />
        </>
    )
}

function Main() {
    return (
        <>
            <AsideNav name={'Guruhlar'} size={'40'} />
            <Group />
        </>
    )
}

export default Groups