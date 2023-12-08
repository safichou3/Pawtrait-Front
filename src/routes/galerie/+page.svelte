<script>
  /** @type {import('./$types').PageData} */
  export let data;

  import { onMount } from 'svelte';

  let likedImages = []; 
  let searchTerm = '';
  let selectedCategory = [];
  let likesCount = {}; 

  function toggleLike(id) {
    if (likedImages.includes(id)) {
      likedImages = likedImages.filter(imageId => imageId !== id);
      likesCount = { ...likesCount, [id]: (likesCount[id] || 0) - 1 };
    } else {
      likedImages = [...likedImages, id];
      likesCount = { ...likesCount, [id]: (likesCount[id] || 0) + 1 };
    }
  }

  onMount(() => {
    let tempCount = {};
    data.data.forEach(image => {
      tempCount[image.id] = 0;
    });
    likesCount = tempCount;
  });

function getRandomSize() {
  const sizes = ['small', 'medium', 'large'];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
}

let loading = true; 

onMount(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  loading = false; 
});
</script>

<div class="bg-white">
{#if loading}
  <div style="height: 700px;">
    <div class="three col">
      <div class="loader" id="loader-7"></div>
    </div>
  </div>
{:else}
  <div>
    <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div class="border-b border-gray-200 pb-10 pt-12">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Découvrez un monde d'animaux</h1>
        <p class="mt-4 text-base text-gray-500">Dans une large galerie d’images libre de droit, parcourez les créatures les plus mignonnes</p>
      </div>

      <div class="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <aside>
          <h2 class="sr-only">Filters</h2>
          <button type="button" class="inline-flex items-center lg:hidden">
            <span class="text-sm font-medium text-gray-700">Filters</span>
            <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
            </svg>
          </button>
          <div class="hidden lg:block">
            <form class="space-y-7 divide-y divide-gray-200">
              <div class="search flex items-center space-x-2">
                <input type="text" name="search" id="search" bind:value={searchTerm} class="border-2 pl-2 pr-2 pt-1 pb-1 rounded-md" placeholder="Recherchez par description..." />
                <label for="search" class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-gray-400">
                    <path d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"/>
                  </svg>
                </label>
              </div>
              <div class="pt-5">
                <fieldset>
                  <legend class="block text-sm font-medium text-gray-900">Catégorie</legend>
                  {#each data.dataCategories as category}
                    {#if category.name !== null}
                      <label class="flex items-center">
                        <input type="checkbox" bind:group={selectedCategory} value={category.id} class="mr-2">
                        <span class="text-sm text-gray-700">{category.name}</span>
                      </label>
                    {/if}
                  {/each}
                </fieldset>
              </div>
            </form>
          </div>
        </aside>

        <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <h2 id="product-heading" class="sr-only">Products</h2>
    
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {#each data.data as dataKey}
              {#if dataKey.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!selectedCategory.length || (dataKey.category && selectedCategory.includes(dataKey.category.id)))}
                <div class="mb-4">
                  <a href="/galerie/{dataKey.id}">
                    <img src="{dataKey.photoUrl}" alt="" class="rounded-xl image-size-{getRandomSize()}">
                  </a>
                </div>
              {/if}
            {/each}
          </div>
        </section>
      </div>
    </main>
  </div>
{/if}
</div>
  
<style>
  .image-size-small {
    width: 100%;
    height: auto;
  }

  .image-size-medium {
    width: 100%;
    height: auto;
  }

  .image-size-large {
    width: 100%;
    height: auto;
  }
  
  .loader {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999; /* Ensure the loader is above other elements */
  }

  #loader-7 {
    -webkit-perspective: 120px;
    -moz-perspective: 120px;
    -ms-perspective: 120px;
    perspective: 120px;
  }

  #loader-7:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border: 4px solid #8a34db;
    animation: flip 1s infinite;
  }

  @keyframes flip {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }

  </style>
  