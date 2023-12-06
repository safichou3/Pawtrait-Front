import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies }) {
    // const response = await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_c62EzoEgHNw9QRdu9JB4fU9JnZnBOpzV4SKpxaEo5iWNPAXIs7AM04Y4Vss31D6E/" + params.single);
    // const data = await response.json();
    // return {
    //     data
    // };
    try {
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');

        // Fetch photos
        const response = await fetch('http://localhost:8080/api/photos/' + params.single, {
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
            return { data };
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
};


/** @type {import('./$types').Actions} */
export const actions = {
    sendImage: async ({ cookies, request, params }) => {
        try {
            const accessToken = cookies.get('sessionid');

            const data = await request.formData();
            const description = data.get('description');
            const categoryId = data.get('categoryId');

            const response = await fetch('http://localhost:8080/api/photos/' + params.single, {
                method: 'PUT',
                body: JSON.stringify({
                    description,
                    categoryId: {
                        id: categoryId
                    },
                }),
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                return { success: true };
            } else {
                console.error('Échec de la modification de la photo:', response.status, response.statusText, await response.json());
            }
        } catch (error) {
            console.error('Erreur lors de la requête de photo:', error);
        }
    },
};
