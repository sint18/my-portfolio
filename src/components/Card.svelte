<script lang="ts">
    export let title: string
    export let href: string
    export let description: string
    export let techStack: string[]
</script>
<a class="card card-hover overflow-hidden" href={href}>
    <header>
        <img class="w-full" src="https://placehold.co/600x400" alt="Cover image for {title}">
    </header>
    <section class="p-4 space-y-4">
        <h2 class="text-2xl">{title}</h2>
        <article>
            <p>
                {description}
            </p>
        </article>
    </section>
    <footer class="card-footer">
        <div class="flex space-x-4">
            {#each techStack as lang}
                <span class="chip variant-filled ">{lang}</span>
            {/each}
        </div>
    </footer>
</a>