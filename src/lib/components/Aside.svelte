
<script>
    let active=false;
    export let label; 
    import { slide } from 'svelte/transition';
</script>
<label for='aside' on:click={() => {active = !active}}>{label}</label> 

{#if active}
<aside aria-live='polite' transition:slide >
    <slot></slot>
</aside>
{/if}
