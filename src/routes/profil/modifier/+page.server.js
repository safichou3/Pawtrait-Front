/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    try {
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');
        console.log(accessToken)
        // const userId = cookies.get('userid');

        // Fetch photos
        const response = await fetch('http://localhost:8080/api/account', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
            // Vous n'avez pas besoin du corps (body) pour une requête GET
        });

        // Check if both requests were successful
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            console.log(data.lastName)
            // Returning an object with data and dataCategories
            return {data};
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}


/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({cookies, request}) => {
        const data = await request.formData();
        const login = data.get('login');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        try {
            const response = await fetch('http://localhost:8080/api/account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    login,
                    password,
                    firstName,
                    lastName,
                    email,
                }),
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                cookies.set('sessionid', responseData.id_token);
                return {success: true};
            } else {
                console.error('Échec de l\'inscription:', response.status, response.statusText, response.json);
            }
        } catch (error) {
            console.error('Erreur lors de la requête d\'inscription:', error);
        }
    },
};