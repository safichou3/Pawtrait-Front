
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: {
            username: '',
            password: '',
            rememberMe: false,
            responseData: {}
        }
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
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

                cookies.set('sessionid', responseData.id_token);

                const response2 = await fetch('http://localhost:8080/api/account', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${responseData.id_token}`,
                    },
                });

                const dataUser = await response2.json();

                cookies.set('userid', dataUser.id);

                return { success: true };

            } else {
                const errorResponseData = await response.json();
                return { error: errorResponseData.message };
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            return { error: 'Une erreur s\'est produite lors de la requête.' };
        }
    }
};
