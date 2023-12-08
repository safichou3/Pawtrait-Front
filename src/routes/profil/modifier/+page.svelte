<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);

    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    const createdDateFormatted = data?.originalData?.createdDate ? formatDate(data.originalData.createdDate) : '';


    /** @type {import('./$types').ActionData} */
    export let form;

    // State variable to store the success message
    let successMessage = '';

    async function handleSubmit(event) {
        event.preventDefault();
        successMessage = ''; // Reset success message on new submission

        const formData = new FormData(event.target);
        formData.append('originalData', JSON.stringify(data.originalData));

        const response = await fetch(window.location.href, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            form = await response.json(); // This will not re-render the component
            successMessage = 'Modification réussie!'; // Set success message
        } else {
            console.error('Error updating profile:', await response.json());
        }
    }
</script>

<div>

    <div class="pt-5 pl-5">
        <a href="/profil" class="flex items-center text-xl gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="text-2xl">
                <path fill="currentColor"
                      d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"></path>
            </svg>
            Retour
        </a>
    </div>

    <!--    <h1 class="text-center">Formulaire de modification de profil</h1>-->

    <form class="flex flex-col items-center justify-center mt-20 px-8" name="profile" on:submit={handleSubmit}>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Profil</h2>
                <p class="mt-1 text-sm leading-6 text-gray-400">Compte crée le : {createdDateFormatted}</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Nom
                            d'utilisateur</label>
                        <div class="mt-2">
                            <input type="text" name="login" id="login" autocomplete="username"
                                   class="w-60 p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                                   placeholder={data.originalData.login}/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                        <div class="mt-2">
                            <input type="text" name="firstName" id="firstName"
                                   class="w-60 p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                                   placeholder={data.originalData.firstName}/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Nom de
                            famille</label>
                        <div class="mt-2">
                            <input type="text" name="lastName" id="lastName"
                                   class="w-60 p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                                   placeholder="{data.originalData.lastName}"/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse
                            e-mail</label>
                        <div class="mt-2">
                            <input type="email" name="email" id="email"
                                   class="w-60 p-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
                                   placeholder={data.originalData.email}/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe
                            actuel</label>
                        <input type="password" name="password" id="password"
                               class="w-60 mt-2 mb-3 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2"/>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="newPassword" class="block text-sm font-medium leading-6 text-gray-900">Nouveau mot
                            de passe</label>
                        <input type="password" name="newPassword" id="newPassword"
                               class="w-60 mt-2 flex justify-center rounded-lg border border-solid border-gray-900/25 p-2"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="../profil">
                <button type="reset"
                        class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Annuler
                </button>
            </a>
            <button type="submit"
                    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Enregistrer
            </button>
        </div>
    </form>


</div>

{#if form?.success}
    <p>Modification reussi</p>
{/if}
{#if successMessage}
    <p>{successMessage}</p>
{/if}