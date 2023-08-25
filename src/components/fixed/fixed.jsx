import { FixWrapper } from "./style"
import NavbarLeft from "../navbar-left/navbar-left"
import { FixContent } from "./style"

function Fixed({ content }) {
    return (
        <>
            <FixWrapper>
                <NavbarLeft />
                <FixContent>
                    {content}
                </FixContent>
            </FixWrapper>
        </>
    )
}

export default Fixed