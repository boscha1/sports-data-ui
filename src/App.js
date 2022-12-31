import {Route, Routes} from 'react-router-dom'
import TeamsPage from "./components/team/TeamsPage";
import TeamPage from "./components/team/TeamPage";

function App() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/teams/:id" element={<TeamPage />} />
            </Routes>
        </div>
    )
}

export default App;
