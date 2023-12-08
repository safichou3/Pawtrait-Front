<script>
    import "../app.css";
    import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
  </script>

<header>
    <Header/>
</header>

<main class="overflow-x-hidden">
    <slot></slot>
</main>

<footer>
<Footer/>
</footer>