// src/routes/+layout.server.js
export async function load({ cookies }) {
    const accessToken = cookies.get('sessionid');
    const accessToken2 = cookies.get('userid');

    return {
        accessToken,
        accessToken2
    };
}
