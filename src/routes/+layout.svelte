<script lang="ts">
	import '../app.postcss';

    // Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
    import {AppBar, AppShell, storeHighlightJs} from '@skeletonlabs/skeleton';
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

    // For Web Analytics - Vercel
    import { inject } from '@vercel/analytics'
    inject()

    // For Web Speed Test
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    injectSpeedInsights();

    import { initializeStores, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
    initializeStores();

    import ProjectDetailModal from '../components/ProjectDetail.svelte';

    const modalRegistry: Record<string, ModalComponent> = {
        // Set a unique modal ID, then pass the component reference
        projectDetailModal: {ref: ProjectDetailModal}
    }

    import SocialCard from '$lib/static/social-card.png'
    export let data
</script>

<svelte:head>
<!--    TODO: Optimize for seo with sanity -->
    <meta property="description" content="Hi, I'm Sint, a passionate Software Engineer and Web Developer. Explore my projects, skills, and professional journey." />
    <meta property="og:image" content="{SocialCard}">
    <meta property="og:site_name" content="Sint's Portfolio">
    <meta property="og:title" content="Sint's Portfolio">
    <meta property="og:description" content="Explore my projects, skills, and professional journey." />
    <meta property="og:url" content="https://www.sinthtoo.com/">
</svelte:head>
<Modal components={modalRegistry}></Modal>
<!--<Navbar></Navbar>-->
<!--<slot />-->
<!--<Footer links={data.links}></Footer>-->
<AppShell>
    <svelte:fragment slot="pageHeader">
        <AppBar background="bg-transparent" padding="-p-4" gap="gap-0">
            <svelte:fragment slot="trail">
                <Navbar></Navbar>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot></slot>
    <svelte:fragment slot="pageFooter">
        <Footer links={data.links}></Footer>
    </svelte:fragment>
</AppShell>
