/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const initialData = {
        username: '',
        password: '',
        rememberMe: false,
    };

    return {
        data: initialData,
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({request}) => {
        const data = await request.formData();        
        const username = data.get('username');        
        const password = data.get('password');
        const rememberMe = data.get('rememberMe');

        console.log(username);
		try {
            const response = await fetch('http://localhost:8080/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    rememberMe,
                }),                
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log('Token de connexion:', responseData.id_token);
            } else {
                console.error('Échec de l\'authentification:', response.status, response.statusText, response.json);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
}
};



