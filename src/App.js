import {Route, Routes} from 'react-router-dom'
import TeamPage from "./components/team/TeamPage";

function App() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<TeamPage />} />
            </Routes>
        </div>
    )
}

export default App;
