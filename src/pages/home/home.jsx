import Dashboard from "../../components/dashboard/dashboard"
import Fixed from "../../components/fixed/fixed"


function Home() {
    return (
        <>
            <Fixed content={<Main/>} />
        </>
    )
}

function Main() {
    return (
        <>
            <Dashboard />
        </>
    )
}

export default Home