<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const sessionId = data.accessToken;
	const userId = data.accessToken2;
</script>

<header>
	<Header {sessionId} {userId} />
</header>

<<<<<<< HEAD
<main>
	<slot />
=======
<main class="overflow-x-hidden">
    <slot></slot>
>>>>>>> feat/stylesAllPages
</main>

<footer>
	<Footer {sessionId} {userId} />
</footer>
