<script>
  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div>
  <h1>Formulaire d'Inscription</h1>
  <form method="POST" action="?/register">

    <label>
      Nom d'utilisateur:
      <input type="text" name='login' />
    </label>
    <label>
      Mot de passe:
      <input type="password" name='password' />
    </label>
    <label>
      Prénom:
      <input type="text" name='firstName' />
    </label>
    <label>
      Nom de famille:
      <input type="text" name='lastName' />
    </label>
    <label>
      Adresse e-mail:
      <input type="email" name='email' />
    </label>
    <button type="submit">S'inscrire</button>
  </form>

</div>

{#if form?.success}
  <p>Inscription réussie ! Bienvenue</p>
{/if}
