<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
		<img src={data.data.photoUrl} alt="" />
		<p class="date mt-2 text-right">23/10/2023</p>
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
			<p class="text-lg">@MSafiax</p>
		</a>
		<input
			type="text"
			id="description"
			name="description"
			placeholder={data.data.description}
			required
		/>
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
			<a
				href="../delete"
				class="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-600 duration-500 text-white font-semibold"
			>
				Supprimer
			</a>
		</div>
	</div>
</div>
