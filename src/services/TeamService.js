const baseUrl = 'http://localhost:8081/team/'

export async function getTeams() {
    const response = await fetch(baseUrl);

    return await response.json();
}

export async function getTeamById(id) {
    const response = await fetch(`${baseUrl}${id}/`)

    return await response.json();
}