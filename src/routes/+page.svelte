<script lang='ts'>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

    const slides = [
        'Images1', 
    ]
</script>

<Splide options={ { rewind: true } } aria-label="My Favorite Images">
    { #each slides as slide }
    <SplideSlide>
      <img src={ slide.src } alt={ slide.alt }>
    </SplideSlide>
  { /each }
</Splide>

<style lang='scss'>
    img {
        width: 100vw;
        height: 100vh;
    }
</style>