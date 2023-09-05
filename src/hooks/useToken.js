import { useContext } from "react";
import { Context } from "../context/authState";

function useToken() {
    const ctx = useContext(Context);

    console.log();

    return [ctx.state]
} 

export default useToken