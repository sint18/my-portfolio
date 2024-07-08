<script lang="ts">
    export let text: string
    export let href: string
    export let activeClass: string
</script>

<li>
    <a href={href}
       class="text-xl sm:text-2xl font-semibold {activeClass}">
        {text}
    </a>
</li>