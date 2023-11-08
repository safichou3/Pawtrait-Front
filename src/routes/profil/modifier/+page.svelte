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
        )*/

</script>

<!--
<div class="flex flex-col items-center justify-center mt-20 px-8">
    <p>Date de création du compte</p>
    <form class="max-w-2xl" method="post">

        <div class="flex flex-col gap-2 w-full">
            &lt;!&ndash; <div>
                 <label for="firstName" class="text-gray-600 dark:text-gray-400">Prénom</label>
                 <input class="w-full py-3 border rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        id="firstName" name="firstName" type="text">
             </div>&ndash;&gt;

            <div>
                <label for="username" class="">Nom d'utilisateur</label>
                <input id="username"
                       class="w-full py-3 border rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                       name="username" type="text">
            </div>

            <div>
                <label for="bio" class="text-gray-600 dark:text-gray-400">Bio</label>
                <textarea id="bio" name="bio"
                          class="w-full py-3 border rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow resize-none"></textarea>
            </div>

            <div>
                <label for="file" class="text-gray-600 dark:text-gray-400">Photo de profil</label>
                <div class="flex">
                    <img src="https://via.placeholder.com/50x50" alt="">
                    <input id="file" class="w-full py-3 px-3 cursor-pointer" name="file" type="file">
                </div>
            </div>

            <div>
                <label for="password" class="text-gray-600 dark:text-gray-400">Mot de passe actuel</label>
                <input id="password" name="password" type="password"
                       class="w-full py-3 border rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
            </div>

            <div>
                <label for="newPassword" class="text-gray-600 dark:text-gray-400">Nouveau mot de passe</label>
                <input id="newPassword" name="newPassword" type="password"
                       class="w-full py-3 border rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
            </div>


            <div class="flex justify-end">
                <button
                        class="py-1.5 px-3 m-1 text-center bg-green-700 border rounded-md text-white hover:bg-green-500 hover:text-gray-100"
                        type="submit">Sauvegarder
                </button>
            </div>

            <div class="flex justify-end">
                <button
                        class="py-1.5 px-3 m-1 text-center bg-red-700 border rounded-md text-white hover:bg-red-500 hover:text-gray-100"
                        type="submit">Supprimer le compte
                </button>
            </div>
        </div>
    </form>
</div>-->

<div class="pt-5 pl-5">

    <a href="/profil" class="flex items-center text-xl gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-2xl">
            <path fill="currentColor"
                  d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"></path>
        </svg>
        Retour</a>
</div>

<form class="flex flex-col items-center justify-center mt-20 px-8">
    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Profil</h2>
            <p class="mt-1 text-sm leading-6 text-gray-400">Compte crée le : 07/11/2023</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nom
                        d'utilisateur</label>
                    <div class="mt-2">
                        <input type="text" name="username" id="username" autocomplete="username"
                               class="w-60 p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                               placeholder="@MSafiax">
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Bio</label>
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="3"
                                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2 resize-none"
                                  placeholder="Je photographie mes animaux car j’aime plus que tout partager les petites bouilles mignonnes de mes chats"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">Ecrivez quelques phrases sur vous </p>
                </div>

                <div class="col-span-full">
                    <p for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</p>
                    <div class="mt-2 flex items-center gap-x-3">
                        <img src="https://via.placeholder.com/70" alt="">
                        <label for="files"
                               class="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Changer</label>
                        <input id="files" style="visibility:hidden;" type="file">
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="oldPassword" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe
                        actuel</label>
                    <input type="password" name="oldPassword" id="oldPassword"
                           class="w-60 mt-2 mb-3 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2">

                    <label for="newPassword" class="block text-sm font-medium leading-6 text-gray-900">Nouveau mot de
                        passe</label>
                    <input type="password" name="newPassword" id="newPassword"
                           class="w-60 mt-2 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2">
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button"
                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Annuler
        </button>
        <button type="submit"
                class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Enregistrer
        </button>
    </div>
</form>
