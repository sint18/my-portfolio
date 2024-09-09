<script lang="ts">
    import GitHubLogo from "virtual:icons/mdi/github";
    import SkillIcons from "./SkillIcons.svelte";

    export let title: string
    export let href: string
    export let description: string
    export let tags: string[]
    export let imageUrl: string

</script>
<div class="card overflow-hidden shadow-md">
    <header>
        <img class="w-full" src="{imageUrl}" alt="Cover image for {title}">
    </header>
    <section class="p-4 space-y-4">
        <div class="flex justify-between flex-wrap gap-4">
            <h2 class="text-2xl">{title}</h2>
            {#if href}
                <a class="btn variant-soft" href={href} target="_blank" rel="noopener noreferer">
                    <span class="text-xl"><GitHubLogo></GitHubLogo></span>
                    <span class="">See the Code</span>
                </a>
            {/if}
        </div>
        <article>
            <p>
                {description}
            </p>
        </article>
    </section>
    <footer class="card-footer space-y-4">
<!--        <div class="flex flex-wrap gap-4">-->
<!--            {#each tags as lang}-->
<!--                <span class="chip variant-filled">{lang}</span>-->
<!--            {/each}-->
<!--        </div>-->
        <SkillIcons skills={tags}></SkillIcons>
    </footer>
</div>