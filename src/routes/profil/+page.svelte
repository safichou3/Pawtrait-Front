<script>
    export let data;
    export let error;
</script>
{#if error}
    <p>An error occurred: {error}</p>
{:else}
    <div class="flex flex-col items-center justify-center px-8">

        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="flex justify-center">
                    <div class="flex flex-col items-center justify-center max-w-xl">
                        <div class="flex justify-center py-5 gap-2 items-center">
                            <img src="https://via.placeholder.com/70" class="rounded-full" alt="">
                            <!--                        <img src="{data.url}" alt="">-->
                            <div class="flex-col">
                                <p>{data.firstName} {data.lastName}</p>
                                <p>@{data.login}</p>
                            </div>
                        </div>
                        <p class="bio text-center">Je photographie mes animaux car j’aime plus que tout partager les
                            petites
                            bouilles mignonnes de mes chats</p>
                        <!--                    <p class="bio text-center">{data.bio}</p>-->
                    </div>
                </div>
                <div class="btn flex flex-col items-center justify-center py-3">
                    <a href="/profil/modifier"
                       class="bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 duration-300 py-2 px-5 rounded-lg">Modifier
                        le profil</a>
                    <a href="/profil/modifier"
                       class="bg-red-600 text-sm font-semibold text-white hover:bg-red-500 duration-300 py-2 px-5 mt-3 rounded-lg">Se déconnecter</a>
                </div>
            </div>
        </div>
    </div>
{/if}