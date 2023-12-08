
<script>
  // PHOTOS DE TEAM
	import first from '$lib/assets/classement-1.png';
	import second from '$lib/assets/classement-2.png';
	import third from '$lib/assets/classement-3.png';

   export let data;
   if (data != undefined){
    data = data.top3;
   }else{
    data =[];
   }
   console.log(data)


   
</script>
{#if data.length > 0}

<section class="bg-[#A06CD5]">
  <!-- Container -->
  <div class="mx-auto max-w-7xl px-5 pb-16">
    <div class="border-b border-gray-200 pb-10 pt-12 mb-16">
      <h1 class="text-4xl font-bold tracking-tight text-white">Découvrez le classement !</h1>
      <p class="mt-4 text-base text-gray-100">Retrouvez ici les images avec les animaux les plus mignons selon la communauté.</p>
    </div>
    <!-- Testimonial Content -->
    <div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
      <!-- Testimonial -->
      {#if data.length >= 2}
      <a href="/galerie/{data[1].id}" class="rounded-2xl bg-white order-2 md:order-1 h-96 md:mt-12 testi">
        <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[1].photoUrl} alt="">
        <div class="px-4">
          <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
          <p class="line-clamp-1 text-[rgb(130,130,130)] text-center">{data[1].description}</p>
          <img src={second}  alt="medaille en argent" class="mx-auto mt-2 h-14">
        </div>
      </a>
      {/if}
      <!-- Testimonial -->
      <a href="/galerie/{data[0].id}" class="rounded-2xl bg-white order-1 md:order-2 h-96 testi">
        <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[0].photoUrl} alt="">
        <div class="px-4 h-14">
          <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
          <p class="line-clamp-1 text-[#828282] text-center">{data[0].description}</p>
          <img src={first}  alt="medaille en or" class="mx-auto mt-2 h-14">
        </div>
      </a>
      <!-- Testimonial -->
      {#if data.length >= 3}
      <a href="/galerie/{data[2].id}" class=" rounded-2xl bg-white order-3 h-96 md:mt-24 puff-in-center testi">
       <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[2].photoUrl} alt="">
       <div class="px-4">
        <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
        <p class="line-clamp-1 text-[#828282] text-center">{data[2].description}</p>
        <img src={third}  alt="medaille en bronze" class="mx-auto mt-2 h-14">
      </div>
      </a>
      {/if}
    </div>

  </div>
</section>
{:else}
<section class="bg-[#A06CD5]">
  <!-- Container -->
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <h2 class="mx-auto text-white pb-12 my-8 max-w-3xl text-center text-3xl font-extrabold md:mb-12 md:text-5xl">Classement hebdomadaire</h2>
    <!-- Testimonial Content -->
    <div class="mb-5 grid grid-cols-1 gap-5">
      <h3 class="mx-auto text-white pb-12 my-8 max-w-3xl text-center  font-extrabold md:mb-12">Il n'y a pas encore de photos pour le classement !</h3>
    </div>
   
  </div>
</section>
{/if}

<style>
 

  .separator{
    border-bottom:solid 1px #eceae2;
  }
  @keyframes puff-in {
  0% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    filter: blur(0);
    opacity: 1;
  }
}

.testi {
  animation-name: puff-in;
  animation-duration: 0.7s;
  animation-fill-mode: forwards; /* Garde les styles à la fin de l'animation */
  opacity: 0;
}

.testi:nth-child(1) {
  animation-delay: 0.7s;
}

.testi:nth-child(2) {
  animation-delay: 1.4s;
}

</style>