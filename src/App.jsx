// *Css
import "./App.css";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import Authentication from "./auth/authentication";
import Unauthenticated from "./auth/unauthenticated";
import useToken from "./hooks/useToken";

function App() {
    const [token] = useToken()

    console.log(token);

    if (token) {
      return <Authentication />
    } else {
      return <Unauthenticated />
    }
}

export default App;
