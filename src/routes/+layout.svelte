<script lang="ts">
	import '../app.postcss';

    // Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // Components
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import {page} from "$app/stores";

    // For Web Analytics - Vercel
    import { inject } from '@vercel/analytics'
    inject()

    // For Web Speed Test
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    injectSpeedInsights();
    export let data
</script>

<svelte:head>
    <meta property="description" content="Hi, I'm Sint, a passionate Software Engineer and Web Developer. Explore my projects, skills, and professional journey." />
<!--    <meta property="og:image" content="">-->
    <meta property="og:site_name" content="Sint's Portfolio">
    <meta property="og:title" content="Sint's Portfolio">
    <meta property="og:description" content="Explore my projects, skills, and professional journey." />
    <meta property="og:url" content="https://www.sinthtoo.com/">
</svelte:head>
<Navbar></Navbar>
<slot />
<Footer links={data.links}></Footer>
