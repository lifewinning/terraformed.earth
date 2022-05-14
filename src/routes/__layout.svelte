<script>
	import { page } from '$app/stores';
	let checked = 'false'
</script>

<header>
	<a href="/"><h1 class:small={$page.url.pathname !== '/'}>terraformed.earth</h1></a>
</header>

<main>
	<slot />
</main>

<footer>
</footer>

<style>
	:global(:root) {
		--spacing-unit: 4px;
		--color-background: #e5e5e5;
		--color-text-primary: #212121;
		--color-text-secondary: #5a5a5a;
	}

	:global(body) {
		margin: 0 auto;
		max-width: 75ch;
		padding: calc(var(--spacing-unit) * 8);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: var(--color-background);
		color: var(--color-text-primary);
		line-height: 1.51;
		font-size: 18px;
	}
	:global(article){
		display:grid;
	}
	:global(article p){
		position: relative;
		z-index: 0; 
		float:left;
		display:inline-grid;
		width: 75%;
	}
	:global(a){
		color:darkgoldenrod;
		text-decoration: none;
	}

	:global(aside){
    width:auto;
	float: right;
	position: relative;
	z-index: 9999;
	padding: 5px;
	border: 1px dotted black;
	background-color: aquamarine;
}


:global(label){
	display: inline;
	background-color: aquamarine;
	text-decoration: underline;
	text-decoration-style: wavy;

}



</style>
