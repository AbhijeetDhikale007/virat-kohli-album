<script lang='ts'>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

    const slides = [
        'Image1', 'Image2'
    ]
</script>

<Splide options={ { rewind: true } } aria-label="My Favorite Images">
    {#each slides as slide, index }
    <SplideSlide>
      <img src='Images/Landscape/{ slide }.jpg' alt={ 'Picture'[index] }>
    </SplideSlide>
  { /each }
</Splide>

<style lang='scss'>
    img {
        width: 100vw;
        height: 100vh;
    }
</style>