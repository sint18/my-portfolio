<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import {page} from "$app/stores";
    interface Links {
        text: string
        href: string
    }

    const links: Links[] = [
        {text: "Sint.", href: "/"},
        {text: "Projects", href: "/projects"},
        {text: "About", href: "/about"},
    ]

    $: isActive = (href: string) => (href === $page.url.pathname ? "text-secondary-700" : "")

</script>

<nav class="p-10 container mx-auto">
    <ul class="flex justify-end space-x-10">
        {#each links as link }
            <NavItem text={link.text} href={link.href} activeClass={isActive(link.href)}></NavItem>
        {/each}
    </ul>
</nav>