<script>

    // let users = [];

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
<<<<<<< HEAD
        )*!/*/

    /*import { onMount } from 'svelte';
    let username, bio, oldPassword, newPassword;
    let profilePhoto; // This will hold the file for the image

    function handlePhotoChange(event) {
        const files = event.target.files;
        if (files.length > 0) {
            profilePhoto = files[0];
            // Optionally, set up image preview here
        }
    }

    async function handleSubmit() {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('bio', bio);
        formData.append('oldPassword', oldPassword);
        formData.append('newPassword', newPassword);
        if (profilePhoto) {
            formData.append('photo', profilePhoto);
        }

        const response = await fetch('/api/your-update-endpoint', {
            method: 'PUT', // or 'PATCH'
            body: formData,
            // Do not set 'Content-Type' header when sending FormData
            // headers: { ... }
        });

        if (response.ok) {
            // Handle success
        } else {
            // Handle error
        }
    }*/

</script>

<div class="">
    <div class="pt-5 pl-5">
        <a href="/profil" class="flex items-center text-xl gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-2xl">
                <path fill="currentColor"
                      d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"></path>
            </svg>
            Retour
        </a>
    </div>

    <form on:submit class="flex flex-col items-center justify-center mt-20 px-8">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h1 class="text-3xl font-semibold leading-7 text-gray-900">Modifier profil</h1>
                <p class="mt-3 text-sm leading-6 text-gray-400">Compte crée le : 07/11/2023</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <!-- Nom d'utilisateur -->
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nom
                            d'utilisateur</label>
                        <div class="mt-2">
                            <input type="text" name="username" id="username" autocomplete="username"
                                   class="w-full p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                                   placeholder="@MSafiax">
                        </div>
                    </div>

                    <!-- Bio -->
                    <div class="col-span-full">
                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Bio</label>
                        <div class="mt-2">
                            <textarea id="about" name="about" rows="3"
                                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2 resize-none"
                                      placeholder="Décrivez-vous brièvement ici."></textarea>
                        </div>
                    </div>

                    <!-- Photo -->
                    <div class="col-span-full">
                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div class="mt-2 flex items-center gap-x-3">
                            <img src="https://via.placeholder.com/70" alt="Votre photo de profil">
                            <input id="photo" type="file" class="hidden">
                            <label for="photo"
                                   class="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Changer</label>
                        </div>
                    </div>

                    <!-- Mot de passe -->
                    <div class="col-span-full">
                        <label for="oldPassword" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe
                            actuel</label>
                        <input type="password" name="oldPassword" id="oldPassword"
                               class="w-full mt-2 mb-3 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2">

                        <label for="newPassword" class="block text-sm font-medium leading-6 text-gray-900">Nouveau mot
                            de passe</label>
                        <input type="password" name="newPassword" id="newPassword"
                               class="w-full mt-2 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2">
                    </div>
                </div>

                <!-- Boutons -->
                <div class="flex justify-end gap-3 mt-6">
                    <button type="button"
                            class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Annuler
                    </button>
                    <button type="submit"
                            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Enregistrer
                    </button>
                </div>

            </div>
            <div class="mt-6">
                <button type="button"
                        class="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onclick="confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')">
                    Supprimer le compte définitivement
                </button>
            </div>
        </div>
    </form>
</div>
