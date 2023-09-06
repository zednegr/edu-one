import { createContext, useState } from "react";

const Context = createContext()

function Provider({children}) {

    const [state, setState] = useState('uz');

    console.log(state);

    return(
        <Context.Provider value={{state, setState}}>{children}</Context.Provider>
    )
}

export {Context, Provider}