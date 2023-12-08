function getTop3CutestImages(data) {
    const imagesWithCuteness = data.filter(item => item.cuteness !== null);
    imagesWithCuteness.sort((a, b) => b.cuteness - a.cuteness);
    return imagesWithCuteness.slice(0, 3);
}
export async function load({ cookies }) {
    try {
        const accessToken = cookies.get('sessionid');
        // Fetch photos
        const response = await fetch('http://localhost:8080/api/photos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, 
            },

        });
        if (response.ok) {
            const data = await response.json();
            const top3 = getTop3CutestImages(data);
            return { top3 };
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}
