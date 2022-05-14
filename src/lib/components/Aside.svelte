<script>
    let active='display:none;'
    export let label; 
    import { slide } from 'svelte/transition';
</script>
<label for='aside' on:click={() => {active = !active}}>{label}</label> 
<aside style={active ? 'display:none;' : 'display:inline-grid;'}>
    <slot></slot>
</aside>