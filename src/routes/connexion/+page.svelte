<script>
 /** @type {import('./$types').PageData} */
 export let data;
  
 /** @type {import('./$types').ActionData} */
 export let form;
 import Swal from 'sweetalert2'


</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-3 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Connectez-vous à votre compte</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form class="space-y-6" action="?/login" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nom d'utilisateur</label>
          <div class="mt-2">
            <input id="username" name="username" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="rememberMe" name="rememberMe" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="rememberMe" class="ml-3 block text-sm leading-6 text-gray-900">Se rappeler de moi ?</label>
          </div>

          <div class="text-sm leading-6">
            <a href="/" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
        </div>
      </form>

      <div>
        <div class="relative mt-10">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm font-medium leading-6">
            <span class="bg-white px-6 text-gray-900">Vous n'avez pas de compte ?</span>
          </div>
        </div>
        <br>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Je m'inscris maintenant</button>
        </div>

      </div>
    </div>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
{#if form?.success == "connecter"}
  {Swal.fire({
    icon: "Super!",
    title: "Vous allez être redirigé vers la galerie.",
    showConfirmButton: false,
    timer: 1500
  })}
  {#if typeof window !== 'undefined'}
    {setTimeout(() => {
      window.location.href = '/galerie';
    }, 1500)}
  {/if}
{/if}

{#if form?.success == "erreur"}
{Swal.fire({
	title: "Avez-vous un compte ?",
	text: "Votre identifiant ou votre mot de passe est erroné.",
	icon: "error",
  showConfirmButton: false,


  })}
{/if}
