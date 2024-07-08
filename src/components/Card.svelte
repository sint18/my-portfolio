<script lang="ts">
    export let title: string
    export let href: string
</script>
<div class="card card-hover">
    <header>
        <img class="w-full" src="https://placehold.co/600x400" alt="Cover image for {title}">
    </header>
    <section class="p-4 space-y-4">
        <h2 class="text-2xl">{title}</h2>
        <article>
            <p>
                Project Description
            </p>
        </article>
    </section>
    <footer class="card-footer">
        <div class="flex space-x-4">

        </div>
    </footer>
</div>