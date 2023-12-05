/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    try {
        const accessToken = cookies.get('sessionid');

        const response = await fetch('http://localhost:8080/api/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête

            },
        });

        if (response.ok) {
            const dataCategories = await response.json();
            // Assuming categoriesData is an array of category objects
            return {
                categories: dataCategories, // Return an object with a key
            };        } else {
            console.error('Échec de récupération des catégories:', response.status, response.statusText, await response.json());
            return { success: false };
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        return { success: false };
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    sendImage: async ({ cookies, request }) => {
        try {
            const photoUrl = await request.formData();
            const description = photoUrl.get('description');
            const categoryId = photoUrl.get('category[id]');

            // Assuming you want to retrieve the user ID from cookies
            const userId = cookies.get('sessionid');
            const accessToken = cookies.get('sessionid');

            const formData = new FormData();
            formData.append('photoUrl', photoUrl.get('photoUrl'));
            formData.append('description', description);
            formData.append('categoryId', categoryId);
            formData.append('userId', userId); // Add user ID to the form data

            const response = await fetch('http://localhost:8080/api/photos', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
    
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                cookies.set('sessionid', responseData.id_token);
                return { success: true };
            } else {
                console.error('Échec de l\'envoi de photo:', response.status, response.statusText, await response.json());
            }
        } catch (error) {
            console.error('Erreur lors de la requête de photo:', error);
        }
    },
};
