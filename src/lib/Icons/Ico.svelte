<script lang="ts">
    import { Icons } from '$data/Icons.js'

    export let name: keyof typeof Icons
    let xmlns: string = 'http://www.w3.org/2000/svg'
    let width: string = '100%'
    let height: string = '100%'
    let displayIcon = Icons[name];
</script>

<svg
    class={$$props.class}
    {xmlns}
    {width}
    {height}
    viewBox={displayIcon.viewBox}>{@html displayIcon.svg}
</svg>