<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let dataCategories;
    
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
                                    {#each data.dataCategories as dataKey}

                                    <div class="space-y-3 pt-6">
                            <li>
                                {dataKey.name}
                            </li>
                        </div>
                            {/each}
                                        
                                    
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
                                <a href="/galerie/{dataKey.id}"><img src="{dataKey.photoUrl}" alt="" class="rounded-xl"></a>
                            </li>
                            {/each}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
</div>