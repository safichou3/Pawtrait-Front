
<script>
   export let data;
   data = data.top3
   console.log(data)
</script>
{#if data.length > 0}
<section class="bg-[#A06CD5]">
  <!-- Container -->
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <h2 class="mx-auto text-white pb-12 my-8 max-w-3xl text-center text-3xl font-extrabold md:mb-12 md:text-5xl">Classement hebdomadaire</h2>
    <!-- Testimonial Content -->
    <div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
      <!-- Testimonial -->
      <div class="grid grid-cols-1  rounded-2xl bg-white order-2 md:order-1 h-96 md:mt-12 testi">
        <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[1].photoUrl} alt="">
        <div class="px-4">
          <div class="flex flex-row ">
            <img src="https://fr.shopping.rakuten.com/photo/309304380_L.jpg"  alt="Testimonial image" class="mr-4 inline-block h-10 w-10 object-cover rounded bg-cover bg-center bg-no-repeat" />
            <div class="flex items-center">
              <h6 class="text-sm font-bold md:text-base">@theonidz</h6>
            </div>
          </div>
          <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
          <p class="line-clamp-1 text-[#828282]">Description super sympa !!!!</p>
      
        </div>
        
      </div>
      <!-- Testimonial -->
      <a href="/galerie/{data[0].id}" class="grid grid-cols-1  rounded-2xl bg-white order-1 md:order-2 h-96 testi">
        <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[0].photoUrl} alt="">
        <div class="px-4">
          <div class="flex flex-row ">
            <img src="https://fr.shopping.rakuten.com/photo/309304380_L.jpg" alt="Testimonial image" class="mr-4 inline-block h-10 w-10 object-cover rounded bg-cover bg-center bg-no-repeat" />
            <div class="flex items-center">
              <h6 class="text-sm font-bold md:text-base">@theonidz</h6>
            </div>
          </div>
          <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
          <p class="line-clamp-1 text-[#828282]">Description super sympa !!!!</p>
      
        </div>
      </a>
      <!-- Testimonial -->
      <div class="grid grid-cols-1  rounded-2xl bg-white order-3 h-96 md:mt-24 puff-in-center testi">
       <img class="rounded-tl-2xl rounded-tr-2xl max-h-60 w-full object-cover" src={data[2].photoUrl} alt="">
        <div class="px-4">
          <div class="flex flex-row ">
            <img src="https://fr.shopping.rakuten.com/photo/309304380_L.jpg" alt="Testimonial image" class="mr-4 inline-block h-10 w-10 object-cover rounded bg-cover bg-center bg-no-repeat" />
            <div class="flex items-center">
              <h6 class="text-sm font-bold md:text-base">@theonidz</h6>
            </div>
          </div>
          <div class="my-4 w-full border-[0.5px] border-solid border-[#eceae2] "></div>
          <p class="line-clamp-1   text-[#828282]">Description super sympa !!!!</p>
      
        </div>
      </div>
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