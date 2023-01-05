import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getTeamById} from "../../services/TeamService";
import Team from "./Team";
import NavBar from "../NavBar";

const TeamPage = () => {
    const {id} = useParams()
    const [team, setTeam] = useState({
        id: null,
        name: '',
        establishedDate: '',
        stadium: '',
        fightSong: '',
        mascot: '',
        location: {
            city: '',
            state: '',
            state_code: '',
            zip_code: ''
        },
        headCoach: {
            firstName: '',
            lastName: '',
            wins: -1,
            losses: -1,
            ties: -1
        },
        colorIds: []
    })

    useEffect(() => {
        if (Number(id)) {
            getTeamById(Number(id))
                .then(response => {
                    console.log(response)
                    setTeam(response)
                })
        }
    }, [id])

    return (
        <div>
            <NavBar />
            <Team team={team}/>
        </div>
    );
};

export default TeamPage;