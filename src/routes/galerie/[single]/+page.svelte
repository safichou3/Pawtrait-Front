<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<div class="back">Retour</div>
<div class="flex justify-center gap-10">
    <div class="left flex flex-col">
        <img src="{data.data[0].url}" alt="">
        <p class="date text-right">23/10/2023</p>
        <div class="tags text-center flex justify-around">
            <button class="border-2 px-4 py-1 bg-red-100 border-2 text-red-800 border-red-600 rounded-lg">Chats</button>
            <button class="border-2 px-4 py-1 bg-amber-100 border-2 text-amber-800 border-amber-600 rounded-lg">Chat
            </button>
            <button class="border-2 px-4 py-1 bg-green-200 border-2 text-green-600 border-green-600 rounded-lg">Animal
            </button>
            <button class="border-2 px-4 py-1 bg-blue-200 border-2 text-blue-800 border-blue-600 rounded-lg">Cute
            </button>
            <button class="border-2 px-4 py-1 bg-violet-200 border-2 text-violet-800 border-violet-600 rounded-lg">
                Mignon
            </button>
            <button class="border-2 px-4 py-1 bg-cyan-200 border-2 text-cyan-800 border-cyan-600 rounded-lg">Winner
            </button>
        </div>
    </div>
    <div class="right flex flex-col">
        <div class="user flex items-center gap-2">
            <img src="https://via.placeholder.com/50" alt="Photo de profile">
            <p class="text-lg">@MSafiax</p>
        </div>
        <p>Dans une large galerie d’images libre de droit, parcourez les créatures les plus mignonnes</p>
        <div class="params gap-2">
            <button class="update border-2 bg-amber-300 border-amber-500 py-2 px-3 rounded-lg">Modifier</button>
            <button class="delete bg-red-300 border-2 border-red-600 py-2 px-3 rounded-lg">Supprimer</button>
        </div>
    </div>
</div>