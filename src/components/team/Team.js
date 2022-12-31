import React from 'react';

const Team = ({ team }) => {
    console.log(team)
    return (
        <div>
            <h3>{team.name}</h3>
            <h3>{team.establishedDate}</h3>
            <h3>{team.stadium}</h3>
        </div>
    );
};

export default Team;