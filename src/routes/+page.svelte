<script lang="ts">
    import GitHubLogo from 'virtual:icons/mdi/github'
    import LinkedInLogo from 'virtual:icons/mdi/linkedin'
    import ScrollIndicator from "../components/ScrollIndicator.svelte";
    import Card from "../components/Card.svelte";
    import {onMount} from "svelte";
    import {fade, fly} from "svelte/transition";

    export let data

    let ready: boolean = false
    onMount(() => {
        ready = true
    })
</script>
<main>
    <!-- TODO: Get scroll snapping to work -->
    <div class="">
        <div class="container mx-auto px-8 sm:px-20 mb-28">
            <div class="h-[75vh] min-h-[650px] relative">
                <div class="sm:pt-56 pt-32 space-y-20 mb-20 sm:mb-64">
                    {#if ready}
                        <div class="space-y-5">
                            <h1 class="text-4xl sm:text-6xl h1"
                                transition:fade={{delay: 200, duration: 500}}>{data.header.title}</h1>
                            <p class="text-2xl sm:text-4xl font-semibold"
                               transition:fade={{delay: 300, duration: 500}}>{data.header.personalProfile}</p>
                            <p class="text-2xl sm:text-4xl text-surface-300" transition:fade={{delay: 400, duration: 500}}>
                                {data.header.introduction}
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <a type="button" class="btn variant-filled" href="{data.links.github}"
                               transition:fly={{delay: 500, duration: 500, x: -50}} target="_blank"
                               rel="noopener noreferrer">
                                <span><GitHubLogo></GitHubLogo></span>
                                <span>GitHub</span>
                            </a>
                            <a type="button" class="btn variant-filled" href="{data.links.linkedin}"
                               transition:fly={{delay: 500, duration: 500, x: 50}} target="_blank"
                               rel="noopener noreferrer">
                                <span><LinkedInLogo></LinkedInLogo></span>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    {/if}
                </div>
                <div class="absolute bottom-0 left-0 w-full text-center">
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
                                href={project.repo}
                                tags={project.tags}
                                imageUrl={project.coverImageUrl}
                        ></Card>
                    {/each}
                </div>
                <!--                <a class="btn variant-filled" href="projects">More Projects</a>-->
            </div>
        </div>
    </div>

</main>
