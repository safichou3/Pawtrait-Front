
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: {
            login: '',
            password: '',
            firstName:"",
            lastName:"",
            email:""
        }
    };
};


/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ cookies, request }) => {
        const data = await request.formData();
        const login = data.get('login');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        try {
            const response = await fetch('http://localhost:8080/api/register', {
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
                return { success: true };
            } else {
                console.error('Échec de l\'inscription:', response.status, response.statusText, response.json);
            }
        } catch (error) {
            console.error('Erreur lors de la requête d\'inscription:', error);
        }
    },
};