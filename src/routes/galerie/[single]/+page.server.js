/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    try {
        console.log(params);
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');

        // Fetch photos
        const response = await fetch('http://localhost:8080/api/photo-with-categories/' + params.single, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
            // Vous n'avez pas besoin du corps (body) pour une requête GET
        });

        // Check if both requests were successful
        if (response.ok) {
            const data = await response.json();

            // Returning an object with data and dataCategories
            return { data, params, accessToken };
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    delete: async ({ cookies, params }) => {
        try {
            const accessToken = cookies.get('sessionid');
            console.log(params.single);
            const response = await fetch(`http://localhost:8080/api/photos/` + params.single, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}` // Ajouter le token d'accès à l'en-tête
                }
            });

            // Check if both requests were successful
            if (response.ok) {
                console.log('ok');
                return { success: "delete" };
            } else {
                console.error('Échec de la requête:', response.status, response.statusText, await response.json());
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            
        }
    },
};
