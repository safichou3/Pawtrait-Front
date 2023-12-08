<script>
    /** @type {import('./$types').PageData} */
    export let data;
    // console.log(data)
    console.log(data.lastName)
    /** @type {import('./$types').ActionData} */
    export let form;
</script>
console.log(data.lastName)
<div>
    <h1>Formulaire de modification de profil</h1>
    <form method="POST" action="?/register">

        <label>
            Nom d'utilisateur:
            <input class="border-2" type="text" name='login' bind:value={data.firstName}/>
        </label>
        <label>
            Mot de passe actuelle:
            <input class="border-2" type="password" name='password'/>
        </label>
        <label>
            Nouveau Mot de passe:
            <input class="border-2" type="password" name='password'/>
        </label>
        <label>
            Prénom:
            <input class="border-2" type="text" name='firstName'/>
        </label>
        <label>
            Nom de famille:
            <input class="border-2" type="text" name='lastName'/>
        </label>
        <label>
            Adresse e-mail:
            <input class="border-2" type="email" name='email'/>
        </label>
        <button type="submit">Enregistrer les informations du profil</button>
    </form>

</div>

{#if form?.success}
    <p>Modification reussi</p>
{/if}
