<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-light-background-alt dark:bg-dark-background-alt">
	<div class="min-h-screen">
		<Header />
		<main class="max-w-4xl m-auto py-4"><slot /></main>
	</div>
	<Footer />
</div>
