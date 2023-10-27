<script>
    // Dans UserList.svelte
let users = [];

async function fetchUsers() {
    const response = await fetch('http://localhost:8080/api/tags'); // Remplacez par l'URL de votre API
    if (response.ok) {
        users = await response.json();
    }
}

// Appelez fetchUsers() pour récupérer les données utilisateur
fetchUsers();

</script>

<!-- Dans UserList.svelte -->
<ul>
    {#each users as user (user.id)}
        <li>{user.username}</li>
    {/each}
</ul>
