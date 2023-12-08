import {parse} from 'cookie';

export async function load({request}) {
    const cookies = parse(request.headers.get('cookie') || '');
    const sessionId = cookies.sessionid;

    if (!sessionId) {
        console.error('Session ID cookie not found');
        return {props: {error: 'Session ID cookie not found'}};
    }

    try {
        const response = await fetch(`http://localhost:8080/api/account`, {
            headers: {
                'Authorization': `Bearer ${sessionId}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch user profile: ${errorText}`);
            return {props: {error: `Failed to fetch user profile: ${errorText}`}};
        }

        const userProfile = await response.json();
        // console.log(userProfile)
        return userProfile;

    } catch (error) {
        console.error('Error in load function:', error);
        return {props: {error: error.message}};
    }
}

