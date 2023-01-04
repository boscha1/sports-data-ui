import React from 'react';
import {useEffect, useState} from "react";
import TeamsList from "./TeamsList";
import {getTeams} from "../../services/TeamService";
import NavBar from "../NavBar";

const TeamsPage = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams()
            .then(response => {
                console.log(response)
                setTeams(response)
            })
    }, [])

    return (
        <h1>
            <NavBar />
            <TeamsList teams={teams} />
        </h1>
    );
};

export default TeamsPage;