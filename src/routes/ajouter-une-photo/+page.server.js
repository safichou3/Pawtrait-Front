/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
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
            };
        } else {
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
            const accessToken = cookies.get('sessionid');

            const data = await request.formData();
            const photoUrl = data.get('photoUrl');
            const description = data.get('description');
            const categoryId = data.get('categoryId');
            const file = data.get('fileInput');

            console.log(file);

            let userObject = {
                id: "655c8964160ae92dfeaa8391"
            };

            let categoryObject = {
                id: categoryId
            };

            const formData = new FormData();
            formData.append('photoUrl', photoUrl);
            formData.append('description', description);
            formData.append('user', JSON.stringify(userObject));
            formData.append('category', JSON.stringify(categoryObject));


            formData.append('file', file); // Ajoute le fichier à formData sous la clé 'file'

            console.log(formData);

            const data2 = {
                photoUrl: "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
                description: "a",
                user: {
                    id: "655c9060160ae92dfeaa8393"
                },
                category: {
                    id: "650c539c6f14ba46cb2f5b24"
                }
            };

            const response = await fetch('http://localhost:8080/api/photos', {
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                return { success: true };
            } else {
                console.error('Échec de l\'envoi de photo:', response.status, response.statusText, await response.json());
            }
        } catch (error) {
            console.error('Erreur lors de la requête de photo:', error);
        }
    },
};
