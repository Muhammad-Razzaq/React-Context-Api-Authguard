import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext";

const Dashboard = () => {
    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();

    return (
        <>
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {
                setGlobalState(prev => ({...prev, darkTheme: !prev.darkTheme}))
            }}>Toogle</button>
            {"===>" + JSON.stringify(globalState)}
            <p>This is a protexted route</p>
        </div>
        </>
    );
}

export default Dashboard;