<style>
    aside{
        transition: all 1s linear;
        display: inline-grid;
    }
    .hidden{
        height:0;
        width: 0;
        display: none;
        transition: all 1s linear;

    }
</style>
<script>
    let active=true;
    export let label; 
    import { slide } from 'svelte/transition';
</script>
<label for='aside' on:click={() => {active = !active}}>{label}</label> 

<aside class:hidden={active}>
    <slot></slot>
</aside>

