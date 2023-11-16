<script>
    import {onMount} from 'svelte';
    import Macy from 'macy';

    let macyInstance;
    let likedImages = []; // Store liked images' IDs here

    onMount(() => {
        macyInstance = Macy({
            container: '.macy-container',
            margin: 15,
            columns: 3,
            breakAt: {
                430: {
                    columns: 2,
                }
            }
        });

        return () => {
            if (macyInstance) {
                // Clean up if necessary
                macyInstance.remove();
            }
        };
    });

    /** @type {import('./$types').PageData} */
    export let data = [];

    let likesCount = {}; // Maintains the likes count for each image ID

    function toggleLike(id) {
        if (likedImages.includes(id)) {
            likedImages = likedImages.filter(imageId => imageId !== id); // This is fine because we are reassigning
            likesCount = {...likesCount, [id]: (likesCount[id] || 0) - 1}; // Spread the old values and update the specific id's count
        } else {
            likedImages = [...likedImages, id]; // Use spread syntax for adding an item
            likesCount = {...likesCount, [id]: (likesCount[id] || 0) + 1};
        }
    }

    // Initialize likesCount when component mounts
    onMount(() => {
        let tempCount = {};
        data.data.forEach(image => {
            tempCount[image.id] = 0; // Or you can initialize with real data if you have it.
        });
        likesCount = tempCount; // Assign the temp object to the reactive likesCount to trigger the reactivity
    });

</script>

<div class="bg-white">

    <div>

        <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div class="border-b border-gray-200 pb-10 pt-12">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900">Découvrez un monde d'animaux</h1>
                <p class="mt-4 text-base text-gray-500">Dans une large galerie d’images libre de droit, parcourez les
                    créatures les plus
                    mignonnes</p>
            </div>

            <div class="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                <aside>
                    <h2 class="sr-only">Filters</h2>

                    <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
                    <button type="button" class="inline-flex items-center lg:hidden">
                        <span class="text-sm font-medium text-gray-700">Filters</span>
                        <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                        </svg>
                    </button>
                    <div class="hidden lg:block">
                        <form class="space-y-7 divide-y divide-gray-200">
                            <div class="search flex items-center space-x-2">
                                <input type="text" name="search" id="search"
                                       class="border-2 pl-2 pr-2 pt-1 pb-1 rounded-md"
                                       placeholder="Recherchez...">
                                <label for="search" class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         class="w-5 h-5 fill-gray-400">
                                        <path d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"/>
                                    </svg>
                                </label>
                            </div>
                            <div class="pt-5">
                                <fieldset>
                                    <legend class="block text-sm font-medium text-gray-900">Catégorie</legend>
                                    <div class="space-y-3 pt-6">
                                        <div class="flex items-center cursor-pointer">
                                            <input id="category-0" name="category[]" value="new-arrivals"
                                                   type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-0" class="ml-3 text-sm text-gray-600">Chats</label>
                                        </div>
                                        <div class="flex items-center cursor-pointer">
                                            <input id="category-1" name="category[]" value="tees" type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-1" class="ml-3 text-sm text-gray-600">Chiens</label>
                                        </div>
                                        <div class="flex items-center cursor-pointer">
                                            <input id="category-2" name="category[]" value="crewnecks" type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-2" class="ml-3 text-sm text-gray-600">Tortue</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="category-3" name="category[]" value="sweatshirts" type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-3"
                                                   class="ml-3 text-sm text-gray-600">Hamster</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="category-4" name="category[]" value="pants-shorts"
                                                   type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-4" class="ml-3 text-sm text-gray-600">Furet</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="category-5" name="category[]" value="pants-shorts"
                                                   type="checkbox"
                                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="category-5" class="ml-3 text-sm text-gray-600">Reptiles</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </aside>

                <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                    <h2 id="product-heading" class="sr-only">Products</h2>

                    <div>
                        <!-- Foreach -->
                        <ul class="macy-container">
                            {#each data.data as dataKey}
                                <li>
                                    <a href="/galerie/{dataKey.id}"><img src="{dataKey.url}" alt="" class="rounded-xl"></a>

                                    <div class="like flex items-center gap-2 mt-2 justify-end">
                                        {#if likedImages.includes(dataKey.id)}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-5 h-5"
                                                 role="presentation"
                                                 data-name="Layer 1" style="fill:red" viewBox="0 0 24 24"
                                                 on:click={() => toggleLike(dataKey.id)}>
                                                <path d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05Z"/>
                                            </svg>
                                            <p>{likesCount[dataKey.id]}</p>
                                        {:else}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-5 h-5"
                                                 role="presentation"
                                                 data-name="Layer 1" style="fill:red" viewBox="0 0 24 24"
                                                 on:click={() => toggleLike(dataKey.id)}>
                                                <path d="M14.75 7c-1.2 0-2.19.55-2.75 1.43C11.44 7.55 10.45 7 9.25 7 7.46 7 6 8.57 6 10.5c0 3.36 5.48 7.25 5.71 7.41l.29.2.29-.2c.23-.16 5.71-4.05 5.71-7.41C18 8.57 16.54 7 14.75 7ZM12 16.88c-1.63-1.2-5-4.16-5-6.38C7 9.12 8.01 8 9.25 8c1.32 0 2.25.92 2.25 2.23V11h1v-.77c0-1.31.93-2.23 2.25-2.23C15.99 8 17 9.12 17 10.5c0 2.22-3.37 5.18-5 6.38ZM12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0Zm0 23C5.93 23 1 18.07 1 12S5.93 1 12 1s11 4.93 11 11-4.93 11-11 11Z"/>
                                            </svg>
                                            <p>{likesCount[dataKey.id]}</p>
                                        {/if}
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
</div>
