<script lang="ts">
    import Card from "../../components/Card.svelte";

    export let data
</script>
<main>
    <div class="container p-10 sm:px-20 sm:py-10 mx-auto space-y-14">
        <h1 class="h1 text-3xl sm:text-5xl">Projects</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {#each data.projects as project}
                <Card title="{project.title}" description="{project.description}" href="{project.repo}"
                      tags={project.tags} imageUrl="{project.coverImageUrl}"></Card>
            {/each}
        </div>
    </div>
</main>