<script lang="ts">
    import GitHubLogo from 'virtual:icons/mdi/github'
    import LinkedInLogo from 'virtual:icons/mdi/linkedin'
    import type {Links} from "$lib/types";
    export let links: Links
</script>
<footer>
    <div class="container mx-auto p-10 space-y-5">
        <div class="flex space-x-5 justify-between">
            <div class="flex space-x-5">
                <a href="{links.github}" target="_blank" rel="noopener noreferrer" class="hover:text-primary-700 text-2xl">
                    <GitHubLogo></GitHubLogo>
                </a>
                <a href="{links.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-primary-700 text-2xl">
                    <LinkedInLogo></LinkedInLogo>
                </a>
            </div>
            <p class="font-semibold">Coded with ❤️ by Sint.</p>
        </div>
    </div>
</footer>