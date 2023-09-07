import { createContext, useState } from "react";

const LengthContext = createContext()

function Provider({children}) {
    const [lengthData, setLengthData] = useState('');

    return <LengthContext.Provider value={{lengthData, setLengthData}} >{children}</LengthContext.Provider>
}

export {LengthContext, Provider}