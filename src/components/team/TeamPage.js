import React from 'react';
import {useEffect, useState} from "react";
import Header from "../Header";
import TeamsList from "./TeamsList";

const TeamPage = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const getTeams = async () => {
            const teamsList = await fetchTeams()
            setTeams(teamsList)
        }

        getTeams()
    }, [])

    const fetchTeams = async () => {
        return (await fetch('http://localhost:8081/team/')).json()
    }
    return (
        <h1>
            <Header />
            <TeamsList teams={teams} />
        </h1>
    );
};

export default TeamPage;