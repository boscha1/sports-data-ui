import React from 'react';
import {useEffect, useState} from "react";
import Header from "../Header";
import TeamsList from "./TeamsList";
import {getTeams} from "../../services/TeamService";

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
            <Header />
            <TeamsList teams={teams} />
        </h1>
    );
};

export default TeamsPage;