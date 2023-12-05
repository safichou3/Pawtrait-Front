<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<form method="POST" action="?/sendImage">

    <label for="photoUrl">Photo URL:</label>
    <input type="file" id="photoUrl" name="photoUrl" required><br>

    <label for="description">Description:</label>
    <input type="text" id="description" name="description" required><br>

    <label for="categoryId">Category:</label>
    <select id="categoryId" name="categoryId" required>
        {#if data.categories}
        {#each data.categories as category (category.id)}
          <option value={category.id}>{category.name}</option>
        {/each}
      {/if}
      
    </select><br>

    <button type="submit">Envoyer la photo</button>
</form>
