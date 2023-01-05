import {Route, Routes} from 'react-router-dom'
import TeamsPage from "./components/team/TeamsPage";
import TeamPage from "./components/team/TeamPage";
import Home from "./components/Home";
import CoachPage from "./components/coach/CoachPage";
import CoachesPage from "./components/coach/CoachesPage";

function App() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/teams" element={<TeamsPage/>}/>
                <Route path="/teams/:id" element={<TeamPage/>}/>
                <Route path="/coaches" element={<CoachesPage/>}/>
                <Route path="/coaches/:id" element={<CoachPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
