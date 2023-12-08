<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<!--<h1 class="text-lg font-semibold leading-7 text-gray-900">Formulaire d'Inscription</h1>-->
<div class="flex min-h-full flex-col justify-center py-12 sm:px-3 lg:px-8 bg-[url('https://res.cloudinary.com/dati0zk7b/image/upload/v1701946850/gwpognadajjzqy308142.jpg')] bg-no-repeat bg-cover">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 class="mt-6 text-center text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">Formulaire
            d'Inscription</h1>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form class="space-y-6" method="POST" action="?/register">
                <div>
                    <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Nom
                        d'utilisateur</label>
                    <div class="mt-2">
                        <input id="login" type="text" name='login' required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"/>
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                    <div class="mt-2">
                        <input id="password" type="password" name='password' required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"/>
                    </div>
                </div>

                <div>
                    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                    <div class="mt-2">
                        <input id="firstName" type="text" name='firstName' required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"/>
                    </div>
                </div>

                <div>
                    <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Nom de
                        famille</label>
                    <div class="mt-2">
                        <input id="lastName" type="text" name='lastName' required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"/>
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
                    <div class="mt-2">
                        <input id="email" type="email" name='email' required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"/>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

{#if form?.success}
    <p>Inscription réussie ! Bienvenue</p>
{/if}
