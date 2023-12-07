import cloudinary from '../../lib/cloudinary-config.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    try {
        const accessToken = cookies.get('sessionid');
        const response = await fetch('http://localhost:8080/api/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (response.ok) {
            const dataCategories = await response.json();

            return {
                categories: dataCategories,
            };
        } else {
            console.error('Échec de récupération des catégories:', response.status, response.statusText, await response.json());
            return { success: false };
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        return { success: false };
    }
}
// ... (autres importations)

/** @type {import('./$types').Actions} */
export const actions = {
    sendImage: async ({ cookies, request }) => {
        try {
            const accessToken = cookies.get('sessionid');

            const data = await request.formData();
            const description = data.get('description');
            const categoryId = data.get('categoryId');
            const file = data.get('photoUrl');
            const createdAt = new Date();
            console.log(file);
            const userId = cookies.get('userid');

            let userObject = {
                id: userId
            };

            let categoryObject = {
                id: categoryId
            };

            const detectNSFWResponse = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: createFormData(file),  // Use the FormData object for file upload
            });

            if (detectNSFWResponse.ok) {
                const nsfwData = await detectNSFWResponse.json();

                // Assuming nsfwData.predictions is an object with image paths as keys
                const imagePredictions = nsfwData.predictions;

                console.log(imagePredictions);

                // Set threshold values for NSFW categories
                const pornThreshold = 0.5; // You can adjust this threshold
                const hentaiThreshold = 0.5; // You can adjust this threshold
                const sexyThreshold = 0.5; // You can adjust this threshold

                // Check if any NSFW category exceeds the threshold
                const isNSFW = Object.values(imagePredictions).some(category => {
                    return category['porn'] > pornThreshold || category['hentai'] > hentaiThreshold || category['sexy'] > sexyThreshold;
                });

                // Output the result
                console.log('Is it NSFW?', isNSFW);

                if (!isNSFW) {
                    console.log("false");

                    // Encode file in base64
                    const fileBase64 = await file.arrayBuffer()
                        .then(buffer => Buffer.from(buffer).toString('base64'));

                    // Upload image to Cloudinary
                    const cloudinaryResponse = await cloudinary.v2.uploader.upload(`data:image/png;base64,${fileBase64}`, {
                        folder: 'pawtrait',
                    });

                    if (cloudinaryResponse.secure_url) {
                        const photoUrl = cloudinaryResponse.secure_url;


                        // Envoi de la photo avec la vérification réussie
                        const response = await fetch('http://localhost:8080/api/photos', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${accessToken}`,
                            },
                            body: JSON.stringify({
                                photoUrl,
                                category: categoryObject,
                                user: userObject,
                                description,
                                createdAt
                            }),
                        });

                        if (response.ok) {
                            const responseData = await response.json();
                            console.log(responseData);
                            
                            return { success: "test1" };
                        } else {
                            console.error('Échec de l\'envoi de photo:', response.status, response.statusText, await response.json());
                            return { success: "erreurRequete" };
                        }
                    } else {
                        console.error('Échec de l\'upload vers Cloudinary');
                        return { success: "erreurRequete" };
                    }
                }
                else {
                    return { success: "test4" };
                }
            } else {
                console.error('Échec de la détection NSFW:', detectNSFWResponse.status, detectNSFWResponse.statusText, await detectNSFWResponse.json());
                return { success: "erreurRequete" };
            }
        } catch (error) {
            console.error('Erreur lors de la requête de photo:', error);
            return { success: "erreurRequete" };
        }
    },
};

function createFormData(file) {
    const formData = new FormData();
    formData.append('file', file);
    return formData;
}