<script>
 /** @type {import('./$types').PageData} */
 export let data;
  
 /** @type {import('./$types').ActionData} */
 export let form;

  console.log(data.data.username);
  console.log(data.data.responseData.token); // Access the token here

</script>
<div>
  <h1>Formulaire de Connexion</h1>
  <form method="POST" action="?/login">    
    
    <label>
      Nom d'utilisateur:
      <input type="text" name='username' />
    </label>
    <label>
      Mot de passe:
      <input type="password" name='password' />
    </label>
    <label>
        Se rappeler de moi ?
        <input type="radio" name='rememberMe' />
      </label>
    <button type="submit">Se connecter</button>
  </form>

</div>

{#if form?.success}
	<p>Successfully logged in! Welcome back</p>  
  <script>
    window.location.href = '/';
  </script>
{/if}