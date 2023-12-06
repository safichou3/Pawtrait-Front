import {parse} from 'cookie';

export async function load({request}) {
    const cookies = parse(request.headers.get('cookie') || '');
    const sessionId = cookies.sessionid;
    console.log(sessionId)

    if (!sessionId) {
        console.error('Session ID cookie not found');
        return {props: {error: 'Session ID cookie not found'}};
    }

    try {
        const userId = decodeSessionId(sessionId);
        console.log(userId)
        const response = await fetch(`http://localhost:8080/api/admin/users/public/${userId}`, {
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
        return {props: {userProfile}};

    } catch (error) {
        console.error('Error in load function:', error);
        return {props: {error: error.message}};
    }
}


function decodeSessionId(sessionId) {
    const parts = sessionId.split('.');
    if (parts.length === 3) {
        const payload = atob(parts[1]);
        const payloadObj = JSON.parse(payload);
        return payloadObj.sub; // Adjust based on your JWT structure
    }
    throw new Error('Invalid session ID');
}