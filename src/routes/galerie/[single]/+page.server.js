/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&api_key=live_c62EzoEgHNw9QRdu9JB4fU9JnZnBOpzV4SKpxaEo5iWNPAXIs7AM04Y4Vss31D6E/" + params.single);
    const data = await response.json();
    // console.log(data)
    return {
        data
    };
};