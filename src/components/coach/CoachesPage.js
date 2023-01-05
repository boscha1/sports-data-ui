import React from 'react';
import NavBar from "../NavBar";
import {useEffect, useState} from "react";
import {getCoaches} from "../../services/CoachService";
import CoachesList from "./CoachesList";

const CoachesPage = () => {
    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        getCoaches()
            .then(response => {
                console.log(response)
                setCoaches(response)
            })
    }, [])
    return (
        <div>
            <NavBar />
            <CoachesList coaches={coaches} />
        </div>
    );
};

export default CoachesPage;