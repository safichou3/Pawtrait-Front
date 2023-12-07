<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { onMount } from 'svelte';

	let formattedDate = '';

	onMount(() => {
		const date = new Date(data.data.createdAt);
		formattedDate = date.toLocaleDateString('fr-FR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});
	});

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}
</script>

<div>
	<a href="../galerie" class="flex items-center gap-2 pl-5 pt-3 text-lg mb-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...$$props}
			class="text-3xl"
		>
			<path
				fill="currentColor"
				d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
			/>
		</svg>
		Retour
	</a>
</div>

<div class="flex justify-center gap-10 max-md:flex-col-reverse">
	<div class="left flex flex-col pl-3">
		<img src={data.data.photoUrl} alt="" class="img-width" />
		<p class="date mt-2 text-right">Publiée le {formattedDate}</p>
		<div class="mt-2 tags text-center flex justify-around gap-2">
			<button class="border-2 px-4 py-1 bg-red-100 border-2 text-red-800 border-red-600 rounded-lg"
				>Chats</button
			>
			<button
				class="border-2 px-4 py-1 bg-amber-100 border-2 text-amber-800 border-amber-600 rounded-lg"
				>Chat
			</button>
			<button
				class="border-2 px-4 py-1 bg-green-200 border-2 text-green-600 border-green-600 rounded-lg"
				>Animal
			</button>
			<button
				class="border-2 px-4 py-1 bg-blue-200 border-2 text-blue-800 border-blue-600 rounded-lg"
				>Cute
			</button>
			<button
				class="border-2 px-4 py-1 bg-violet-200 border-2 text-violet-800 border-violet-600 rounded-lg"
			>
				Mignon
			</button>
			<button
				class="border-2 px-4 py-1 bg-cyan-200 border-2 text-cyan-800 border-cyan-600 rounded-lg"
				>Winner
			</button>
		</div>
	</div>
	<div class="right flex flex-col">
		<a href="../profil" class="user flex items-center gap-2 mb-5">
			<img src="https://via.placeholder.com/70" alt="Photo de profile" />
			<p class="text-lg">{data.data.user.login}</p>
		</a>
		<p>Catégorie : {data.data.category.name}</p>
		<p>{data.data.description}</p>
		<div class="flex items-end gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="cursor-pointer w-5 h-5 mt-5"
				role="presentation"
				data-name="Layer 1"
				style="fill:red"
				viewBox="0 0 24 24"
			>
				<path
					d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05Z"
				/>
			</svg>
			150k
		</div>
		<div class="flex gap-5 pt-5">
			<a
				href="/galerie/{data.data.id}/edit"
				class="bg-yellow-400 py-2 px-3 rounded-lg hover:bg-yellow-500 duration-500 text-white font-semibold"
			>
				Modifier
			</a>
			<button
				on:click={toggleModal}
				class="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-600 duration-500 text-white font-semibold"
			>
				Supprimer
			</button>
			<!-- <a
				href="../delete"
				class="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-600 duration-500 text-white font-semibold"
			>
				Supprimer
			</a> -->
		</div>
	</div>
</div>

{#if showModal}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<!--
	  Background backdrop, show/hide based on modal state.
  
	  Entering: "ease-out duration-300"
		From: "opacity-0"
		To: "opacity-100"
	  Leaving: "ease-in duration-200"
		From: "opacity-100"
		To: "opacity-0"
	-->
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<!--
		  Modal panel, show/hide based on modal state.
  
		  Entering: "ease-out duration-300"
			From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			To: "opacity-100 translate-y-0 sm:scale-100"
		  Leaving: "ease-in duration-200"
			From: "opacity-100 translate-y-0 sm:scale-100"
			To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
		-->
				<div
					class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
				>
					<div class="sm:flex sm:items-start">
						<div
							class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg
								class="h-6 w-6 text-red-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
							<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
								Supprimer la photo
							</h3>
							<div class="mt-2">
								<p class="text-sm text-gray-500">Êtes-vous sûr de vouloir supprimer la photo ?</p>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
						<form method="POST" action="?/delete">
							<button
								type="submit"
								class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
								>Supprimer</button
							>
						</form>
						<button
							on:click={toggleModal}
							type="button"
							class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
							>Annuler</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	  
	  .img-width {
    border-radius: 8px;
    width: 667px;
}
</style>