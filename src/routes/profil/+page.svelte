<!--<script>
    // Dans UserList.svelte
<<<<<<< HEAD
    import {onMount} from "svelte";

    let users = [];

        async function fetchUsers() {
            const response = await fetch('http://localhost:8080/application-users/:id'); // Remplacez par l'URL de votre API
            if (response.ok) {
                users = await response.json();
            }
        }

        onMount(() => {
                // Appelez fetchUsers() pour récupérer les données utilisateur
                fetchUsers()
            }
        )

</script>-->

<!--<script>
    import {onMount} from 'svelte';

    let userProfile = {};

    async function fetchUserProfile() {
        // Replace 'userId' with the actual user ID you want to fetch.
        // Normally, you'd get this ID from the logged-in user session or from the URL.
        const userId = 'the-user-id';
        const response = await fetch(`http://localhost:8080/api/application-users/${userId}`);
        if (response.ok) {
            userProfile = await response.json();
        } else {
            // Handle any errors here, such as showing a message to the user
            console.error('Failed to fetch user profile:', response.statusText);
        }
    }

    // Call the fetchUserProfile function when the component is mounted
    onMount(fetchUserProfile);
=======
    // import {onMount} from "svelte";

    let users = [];

    /*    async function fetchUsers() {
            const response = await fetch('http://localhost:8080/api/tags'); // Remplacez par l'URL de votre API
            if (response.ok) {
                users = await response.json();
            }
        }

        onMount(() => {
                // Appelez fetchUsers() pour récupérer les données utilisateur
                fetchUsers()
            }
        )*/
>>>>>>> ab747574b5b33bbda1a907747ad8652a72bd53f2


</script>-->

<!--
<script>
    import {onMount} from 'svelte';

    let userProfile = {};
    let loading = true;
    let errorMessage = '';

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    function parseJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        } catch (e) {
            return null;
        }
    }

    async function fetchUserProfile(userId) {
        try {
            const response = await fetch(`http://localhost:8080/api/application-users/${userId}`);
            if (response.ok) {
                userProfile = await response.json();
            } else {
                throw new Error('Failed to fetch user profile: ' + response.statusText);
            }
        } catch (error) {
            errorMessage = error.message;
        } finally {
            loading = false;
        }
    }

    onMount(() => {
        const token = getCookie('sessionid');
        if (token) {
            const decodedToken = parseJwt(token);
            if (decodedToken && decodedToken.sub) {
                fetchUserProfile(decodedToken.sub);
            } else {
                errorMessage = 'User ID not found in decoded token';
                loading = false;
            }
        } else {
            errorMessage = 'Session ID cookie not found';
            loading = false;
        }
    });
</script>
-->

<script>
    // These props will be populated with the data returned from the load function
    export let userProfile;
    // console.log(userProfile)
    export let error;
</script>

{#if error}
    <p>An error occurred: {error}</p>
{:else}
    <!-- Render the user's information here -->
    <div>
        <h1>User Profile</h1>
        {userProfile}
        <!--            <p>Username: {userProfile.username}</p>-->
        <!--            <p>First Name: {userProfile.firstName}</p>-->
        <!--        <p>Last Name: {userProfile.lastName}</p>-->
        <!--        <p>Email: {userProfile.email}</p>-->
        <!-- Add other user details as needed -->
    </div>
{/if}

<!--<div class="flex flex-col items-center justify-center px-8">

    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <div class="flex justify-center">
                <div class="flex flex-col items-center justify-center max-w-xl">
                    <div class="flex justify-center py-5 gap-2 items-center">
                        <img src="https://via.placeholder.com/70" alt="">
                        <div class="flex-col">
                            <p>Safia Medjahed</p>
                            <p>@MSafiax</p>
                        </div>
                    </div>
                    <p class="bio text-center">Je photographie mes animaux car j’aime plus que tout partager les petites
                        bouilles mignonnes de mes chats</p>
                </div>
            </div>
            <div class="btn flex justify-center py-3">
                <a href="/profil/modifier"
                   class="bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 duration-300 py-2 px-5 rounded-lg">Modifier</a>
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col items-center  justify-center">
    <div class="col-span-full">
        <div class="mt-2 flex flex-col items-center gap-x-3">
            <label for="files"
                   class="cursor-pointer text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...$$props}
                     class="text-9xl">
                    <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                          fill="currentColor"/>
                    <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
                          fill="currentColor"/>
                </svg>
            </label>
            <input id="files" style="visibility:hidden;" type="file">
        </div>
    </div>
    <p>Ajoute des photos à ton profil</p>
</div>-->

