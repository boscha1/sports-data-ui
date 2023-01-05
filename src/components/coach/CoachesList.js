import React from 'react';
import {Link} from "react-router-dom";

const CoachesList = ({coaches}) => {
    const coachesList = coaches.map(coach => {
        return <tr key={coach.id}>
            <td style={{whiteSpace: 'nowrap', textTransform: 'capitalize'}}>
                <Link to={"/coaches/" + coach.id}>{coach.firstName} {coach.lastName}</Link>
            </td>
        </tr>
    })
    return (
        <>
            <table>
                <tbody>
                {coachesList}
                </tbody>
            </table>
        </>
    );
};

export default CoachesList;