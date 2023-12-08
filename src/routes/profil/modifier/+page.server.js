/** @type {import('./$types').PageServerLoad} */

export async function load({cookies}) {

    const token = cookies.get('sessionid');

    // Fetch user data logic here
    const response = await fetch('http://localhost:8080/api/account', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const originalData = await response.json();
        // console.log(originalData)
        return {originalData}; // Return the original data for comparison in your form
    } else {
        console.error('Failed to fetch user data:', response.status, response.statusText);
        // Handle error, like redirecting to a login page or showing an error message
    }
}


/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({request, locals, cookies}) => {
        const formData = await request.formData();

        const fields = {
            login: formData.get('login'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        const token = locals.session?.token || cookies.get('sessionid');

        try {
            const response = await fetch('http://localhost:8080/api/account', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(fields)
            });

            if (response.ok) {
                const responseData = await response.json();
                return {success: true, data: responseData};
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.message || 'Unknown error'};
            }
        } catch (error) {
            return {success: false, error: error.message || 'Error sending request'};
        }
    }
};
