<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
	import Swal from 'sweetalert2'


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
		const imagePreview = document.getElementById('image-preview');

		if (fileNameDisplay && imagePreview) {
			fileNameDisplay.textContent = file ? file.name : '';

			// Show/hide image preview
			if (file) {
				imagePreview.classList.remove('hidden');
			} else {
				imagePreview.classList.add('hidden');
			}

			// Update image source
			const reader = new FileReader();
			reader.onload = function (e) {
				imagePreview.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	}
</script>

<form
	class="bg-white md:col-span-2 flex flex-col items-center"
	method="POST"
	action="?/sendImage"
	enctype="multipart/form-data"
>
	<div class="px-4 py-6 sm:p-8">
		<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="col-span-full">
				<label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
					>Ajouter une photo d'animal</label
				>
				<div class="col-span-full">
					<div
						class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
					>
						<div class="text-center">
							<div class="mt-4 flex text-sm leading-6 text-gray-600">
								<!-- Zone de glisser-déposer -->

								<div
									id="drop-area"
									on:dragover={handleDragOver}
									on:dragenter={handleDragOver}
									on:dragleave={handleDragLeave}
									on:drop={handleDrop}
								>
									<!-- Bouton personnalisé pour ouvrir la boîte de dialogue de téléchargement de fichier -->
									<button type="button" id="customFileBtn" on:click={openFileInput}>
										Ajoute une image
									</button>
									<input
										id="photoUrl"
										name="photoUrl"
										type="file"
										class="sr-only"
										on:change={handleFileInputChange}
									/>
									<p class="pl-1">ou glisse-la ici</p>
									<p id="file-name-display" class="text-xs leading-5 text-gray-600" />
									<img
										id="image-preview"
										src=""
										alt="Image Preview"
										class="hidden max-w-full mt-4"
									/>
								</div>
							</div>

							<p class="text-xs leading-5 text-gray-600">Formats acceptés PNG, JPG, GIF</p>
						</div>
					</div>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="categoryId" class="block text-sm font-medium leading-6 text-gray-900"
					>Catégorie</label
				>
				<div class="mt-2">
					<select
						id="categoryId"
						name="categoryId"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{#if data.categories}
							{#each data.categories as category (category.id)}
								<option value={category.id}>{category.name}</option>
							{/each}
						{/if}
					</select>
				</div>
			</div>

			<div class="col-span-full">
				<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
					>Description</label
				>
				<p class="mt-3 text-sm leading-6 text-gray-600">
					Décris la photo en détail (exemple: Ceci est un lapin qui joue aux cartes).
				</p>
				<div class="mt-2">
					<textarea
						id="description"
						name="description"
						rows="3"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
		<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Retour</button>
		<button
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Envoyer la photo</button
		>
	</div>
</form>

{#if form?.success == "test1"}
{Swal.fire({
	title: "Enregistrée",
	text: "Photo ajoutée avec succès",
	icon: "success"
  })}
   {#if typeof window !== 'undefined'}
   {setTimeout(() => {
	 window.location.href = '/galerie';
   }, 1500)}
 {/if}
{/if}

{#if form?.success == "erreurRequete"}
{Swal.fire({
	title: "Attention",
	text: "Erreur au moment de l'ajout",
	icon: "error"
  })}
{/if}


{#if form?.success == "test4"}
{Swal.fire({
	title: "Attention",
	text: "Les contenus sexuels sont interdits !",
	icon: "error"
  })}
{/if}

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
	.px-4.py-6 .sm\:p-8 .s-KtQKLbXmKp_P {
		margin: auto;
	}
	#image-preview {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
	}

	.hidden {
		display: none;
	}

	#image-preview {
		border-radius: 20px;
	}
</style>
