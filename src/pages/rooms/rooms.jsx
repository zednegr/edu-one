import AsideNav from "../../components/aside_nav/aside_nav"
import Fixed from "../../components/fixed/fixed"
import Group from "../../components/group/group"
import Room from "../../components/room/room"

function Rooms() {
    return (
        <>
            <Fixed content={<Main />} />
        </>
    )
}

function Main() {
    return (
        <>
            <AsideNav name={'Xonalar'} size={'40'} />
            <Room />
        </>
    )
}

export default Rooms