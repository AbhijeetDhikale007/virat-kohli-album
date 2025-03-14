<script lang='ts'>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';
    import Ico from '$lib/index.js'

    import 'virtual:uno.css'

    const slides = [
        'Image1', 'Image2'
    ]
</script>

<Splide
    options={ {
        rewind: true,
        type: 'fade',
        autoplay: true,
        keyboard: true,
        wheel: true,
        wheelMinThreshold: 30,
        releaseWheel: true,
        lazyLoad: true,
        drag: true,
        width: '100vw',
        height: '100vh'
    } }
    aria-label="My Favorite Images">
    <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev z-2">
			<Ico name='Left' />
		</button>
		<button class="splide__arrow splide__arrow--next z-2">
			<Ico name='Left' />
		</button>
  </div>
    {#each slides as slide, index }
    <SplideSlide>
      <img src='Images/Landscape/{ slide }.jpg' alt={ 'Picture'[index] }>
    </SplideSlide>
  { /each }
</Splide>

<style lang='scss'>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    @apply w-100% h-100%;
  }
</style>