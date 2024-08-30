<script lang="ts">
    import GitHubLogo from "virtual:icons/mdi/github";
    import {getModalStore, type ModalSettings} from '@skeletonlabs/skeleton';
    import { type Project } from "$lib/types";
    export let project: Project

    const modalStore = getModalStore();

    function handleClick(targetProject: Project) {
        const modal: ModalSettings = {
            type: 'component',
            component: 'projectDetailModal',
            backdropClasses: '-m-4'
        };
        modalStore.trigger(modal);
    }

</script>
<a class="card overflow-hidden shadow-md" href="#{project.slug}" on:click={() => handleClick(project)}>
    <header>
        <img loading="lazy" class="w-full" src="{project.coverImageUrl}" alt="Cover image for {project.title}">
    </header>
    <section class="p-4 space-y-4">
        <div class="flex justify-between flex-wrap gap-4">
            <h2 class="text-2xl">{project.title}</h2>

            {#if project.repo}
                <a class="btn variant-soft" href={project.repo} target="_blank" rel="noopener noreferer">
                    <span class="text-xl"><GitHubLogo></GitHubLogo></span>
                    <span class="">See the Code</span>
                </a>
            {/if}
        </div>
        <article>
            <p>
                {project.description}
            </p>
        </article>
    </section>
    <footer class="card-footer space-y-4">
        <div class="flex flex-wrap gap-4">
            {#each project.tags as lang}
                <span class="chip variant-filled">{lang}</span>
            {/each}
        </div>
    </footer>
</a>