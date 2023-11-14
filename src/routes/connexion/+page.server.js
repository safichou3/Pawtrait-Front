/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};


/** @type {import('./$types').Actions} */
export const actions = {	
    default: async (event) => {		
        let username = '';
        let password = '';
        let rememberMe = true;
      
            const url = 'http://localhost:8080/api/authenticate';
            const data = {
                username,
                password,
                rememberMe
            };
      
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
      
            const result = await response.json();
            // Gérer la réponse de l'API ici
            console.log(result);
            console.log("nn");
            console.log(username)

        }
    };