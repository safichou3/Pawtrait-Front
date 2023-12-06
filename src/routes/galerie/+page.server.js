/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    try {
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');

        // Fetch photos
        const response = await fetch('http://localhost:8080/api/photos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
            // Vous n'avez pas besoin du corps (body) pour une requête GET
        });

        // Fetch categories
        const responseCategories = await fetch('http://localhost:8080/api/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
        });

        // Check if both requests were successful
        if (response.ok && responseCategories.ok) {
            const data = await response.json();
            const dataCategories = await responseCategories.json();
            
            // Returning an object with data and dataCategories
            return { data, dataCategories };
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
            console.error('Échec de la requête (categories):', responseCategories.status, responseCategories.statusText, await responseCategories.json());
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}
