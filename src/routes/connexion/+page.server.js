
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: {
            username: 'dd',
            password: 'dd',
            rememberMe: false,
            responseData: {}
        }
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({cookies,request}) => {
        const data = await request.formData();        
        const username = data.get('username');        
        const password = data.get('password');
        const rememberMe = data.get('rememberMe');
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
                console.log(responseData);
                cookies.set('sessionid', responseData.id_token);

		return { success: true };

            } else {
                console.error('Échec de l\'authentification:', response.status, response.statusText, response.json);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
}
};
