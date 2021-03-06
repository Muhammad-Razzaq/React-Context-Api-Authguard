import {useHistory} from "react-router-dom";
import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext";

function Signup() {
    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();

    var history = useHistory();
    function handleClick() {
        history.push("/")
    }

    return (
        <>
            <div>
                <h1>Signup</h1>
                <button onClick={() => {
                    setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
                }}>Toogle</button>
                {"===>", JSON.stringify(globalState)}

                <br /> name:  <input type="text" />
                <br /> email:  <input type="text" />
                <br /> password:  <input type="text" />
                <br /> re-password:  <input type="text" />
                <br /> <button>Submit</button>

                <br /> <button onClick={handleClick}>I already have an account take me back to login pag</button>
            </div>
        </>
    );
}

export default Signup;