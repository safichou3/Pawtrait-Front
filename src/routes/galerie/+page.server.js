/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    try {
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');

        const response = await fetch('http://localhost:8080/api/photos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
            // Vous n'avez pas besoin du corps (body) pour une requête GET
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            return {data}
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, response.json);
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}
