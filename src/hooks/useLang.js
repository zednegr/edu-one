import { useContext } from "react";
import { Context } from "../context/langState";

function useLang() {
    const ctx = useContext(Context);

    return [ctx.state, ctx.setState];
}

export default useLang