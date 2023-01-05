const baseUrl = 'http://localhost:8081/head-coach/'

export async function getCoaches() {
    const response = await fetch(baseUrl);

    return await response.json();
}

export async function getCoachById(id) {
    const response = await fetch(`${baseUrl}${id}/`)

    return await response.json();
}