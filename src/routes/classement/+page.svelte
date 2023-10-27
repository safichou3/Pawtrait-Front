<script>
    import Carousel from 'svelte-carousel'
  
    let carousel; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext()
    }
  </script>

<div>
    <h2>Photo de la semaine</h2>
</div>

<Carousel
  
autoplay
autoplayDuration={5000}
autoplayProgressVisible
>
  <div><img src="https://static.zerochan.net/Melody.Omega.full.148969.jpg" alt=""></div>
  <div><img src="https://www.creativeuncut.com/gallery-10/art/eakz-power-omega2.jpg" alt=""></div>
  <div><img src="https://www.giantbomb.com/a/uploads/original/0/112/1209618-art__69_.jpg" alt=""></div>
</Carousel>

    
       
