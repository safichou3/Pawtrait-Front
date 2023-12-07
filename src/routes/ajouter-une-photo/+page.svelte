<script>
  /** @type {import('./$types').PageData} */
  export let data;

  function handleFileInputChange() {
    const fileInput = document.getElementById('photoUrl');
    console.log('Fichier sélectionné :', fileInput.files[0]);
    updateFileName(fileInput.files[0]);
  }

  function openFileInput() {
    const fileInput = document.getElementById('photoUrl');
    fileInput.click();
  }

  function handleDragOver(event) {
    event.preventDefault();
    const dropArea = document.getElementById('drop-area');
    dropArea.classList.add('drag-over');
  }

  function handleDragLeave(event) {
    event.preventDefault();
    const dropArea = document.getElementById('drop-area');
    dropArea.classList.remove('drag-over');
  }

  function handleDrop(event) {
    event.preventDefault();
    const dropArea = document.getElementById('drop-area');
    dropArea.classList.remove('drag-over');

    const fileInput = document.getElementById('photoUrl');
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      fileInput.files = files;
      console.log('Fichier sélectionné :', fileInput.files[0]);
      updateFileName(fileInput.files[0]);
    }
  }

  function updateFileName(file) {
    const fileNameDisplay = document.getElementById('file-name-display');
    if (fileNameDisplay) {
      fileNameDisplay.textContent = file ? file.name : '';
    }
  }
</script>

<form method="POST" action="?/sendImage" enctype="multipart/form-data">

  <div class="col-span-full">
    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Photo de l'animal</label>
    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
        </svg>
        <div class="mt-4 flex text-sm leading-6 text-gray-600">
          <!-- Zone de glisser-déposer -->
          <div id="drop-area" on:dragover={handleDragOver} on:dragenter={handleDragOver} on:dragleave={handleDragLeave} on:drop={handleDrop}>
            <!-- Bouton personnalisé pour ouvrir la boîte de dialogue de téléchargement de fichier -->
            <button type="button" id="customFileBtn" on:click={openFileInput}>
              Ajoute une image
            </button>
            <input id="photoUrl" name="photoUrl" type="file" class="sr-only" on:change={handleFileInputChange}>
            <p class="pl-1">ou glisse-la ici</p>
            <p id="file-name-display" class="text-xs leading-5 text-gray-600"></p>
          </div>
        </div>
      
        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  </div>

	<label for="description">Description:</label>
	<input type="text" id="description" name="description" required /><br />

	<label for="categoryId">Category:</label>
	<select id="categoryId" name="categoryId" required>
		{#if data.categories}
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		{/if}
	</select><br />

	<button type="submit">Envoyer la photo</button>
</form>

<style>
  #customFileBtn {
    /* Ajoutez vos styles personnalisés ici */
    cursor: pointer;
    color: blue;
  }

  #drop-area {
    border: 2px dashed #ddd;
    padding: 20px;
    border-radius: 5px;
  }

  #drop-area.drag-over {
    background-color: #f0f0f0;
  }

  p#file-name-display {
    background-color: #a1faa1;
    border-radius: 27px;
}
</style>