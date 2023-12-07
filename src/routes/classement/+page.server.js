// Importez la fonction getTop3CutestImages ici si elle n'est pas définie dans le même fichier
function getTop3CutestImages(data) {
    const imagesWithCuteness = data.filter(item => item.cuteness !== null);
    imagesWithCuteness.sort((a, b) => b.cuteness - a.cuteness);
    return imagesWithCuteness.slice(0, 3);
}
export async function load({ cookies }) {
    try {
        // Récupérer le token d'accès de vos cookies ou de l'endroit approprié
        const accessToken = cookies.get('sessionid');

        // Fetch photos
        const response = await fetch('http://localhost:8080/api/photos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Ajouter le token d'accès à l'en-tête
            },
            // Vous n'avez pas besoin du corps (body) pour une requête GET
        });

        if (response.ok) {
            const data = await response.json();

            // Utiliser la fonction pour obtenir les 3 images les plus mignonnes
            const top3 = getTop3CutestImages(data);

            // Retourner l'objet avec les 3 images triées
            return { top3 };
        } else {
            console.error('Échec de la requête:', response.status, response.statusText, await response.json());
        }

    } catch (error) {
        console.error('Erreur lors de la requête:', error);
    }
}
