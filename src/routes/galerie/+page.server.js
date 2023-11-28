/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_c62EzoEgHNw9QRdu9JB4fU9JnZnBOpzV4SKpxaEo5iWNPAXIs7AM04Y4Vss31D6E");
    // API KEY // live_c62EzoEgHNw9QRdu9JB4fU9JnZnBOpzV4SKpxaEo5iWNPAXIs7AM04Y4Vss31D6E
    // console.log(response)
    const data = await response.json();
    // console.log(data)
    return {
        data
    };
};