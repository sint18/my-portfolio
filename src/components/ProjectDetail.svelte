<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    // Stores
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type {Project} from "$lib/types";

    // Props
    /** Exposes parent props to this component. */
    export let parent: SvelteComponent;
    export let slug: string

    const modalStore = getModalStore();

    // Notes: Use `w-screen h-screen` to fit the visible canvas size.
    const cBase = 'bg-surface-100-800-token w-screen h-screen';
</script>

{#if $modalStore[0]}
    <section class="{cBase}">
        <main class="container p-10 sm:px-20 sm:py-10 mx-auto space-y-10 sm:space-y-10">
            <h2 class="h2">Full Screen Modal</h2>
            <p>This demonstrates a full screen modal dialog.</p>
            <button class="btn variant-filled" on:click={parent.onClose}>× Close</button>
        </main>
    </section>
{/if}