<script lang="ts">
    import ScrollIndicator from "../components/ScrollIndicator.svelte";
    import Card from "../components/Card.svelte";
    import {onMount} from "svelte";
    import {fade} from "svelte/transition";

    export let data

    let ready: boolean = false
    onMount(() => {
        ready = true
    })
</script>
<main>
    <!-- TODO: Get scroll snapping to work -->
    <div class="">
        <div class="container mx-auto px-8 sm:px-20">
            <div class="h-screen relative">
                <div class="sm:pt-56 pt-48">
                    {#if ready}
                        <div class="space-y-5">
                            <h1 class="text-4xl sm:text-6xl h1" transition:fade={{delay: 200, duration: 500}}>Hi, I am Sint.</h1>
                            <p class="text-2xl sm:text-4xl font-semibold" transition:fade={{delay: 300, duration: 500}}>A Software Engineer | Web Developer based in
                                London.</p>
                        </div>
                    {/if}
                </div>
                <div class="absolute bottom-1/3 sm:bottom-1/4 left-0 w-full">
                    <ScrollIndicator></ScrollIndicator>
                </div>
            </div>
        </div>
        <div class="bg-primary-50 dark:bg-transparent">
            <div class="container mx-auto px-8 sm:px-20 py-14" id="project-showcase">
                <h1 class="h2 text-3xl sm:text-4xl mb-14">Featured Projects.</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {#each data.projects as project}
                        <Card
                                title={project.title}
                                description={project.description}
                                href={project.slug}
                                tags={project.tags}
                                imageUrl={project.coverImageUrl}
                        ></Card>
                    {/each}
                </div>
            </div>
        </div>
    </div>

</main>
