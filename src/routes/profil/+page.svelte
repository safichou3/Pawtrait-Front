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
                <div class="btn flex justify-center py-3">
                    <a href="/profil/modifier"
                       class="bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 duration-300 py-2 px-5 rounded-lg">Modifier
                        le profil</a>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center  justify-center">
        <div class="col-span-full">
            <div class="mt-2 flex flex-col items-center gap-x-3">
                <label for="files"
                       class="cursor-pointer text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...$$props}
                         class="text-9xl">
                        <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                              fill="currentColor"/>
                        <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
                              fill="currentColor"/>
                    </svg>
                </label>
                <input id="files" style="visibility:hidden;" type="file">
            </div>
        </div>
        <p>Ajoute des photos à ton profil</p>
    </div>
{/if}