<script lang="ts">
    export let text: string
    export let href: string
</script>

<li>
    <a href={href}
       class="underline underline-offset-8 text-xl sm:text-2xl font-semibold">
        {text}
    </a>
</li>