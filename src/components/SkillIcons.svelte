<script lang="ts">
    import {onMount} from "svelte";

    export let skills: string[]
    // const testSkills = ['flask', 'postgres', 'docker', 'python']
    // skills = testSkills
    const baseUrl = new URL("https://skillicons.dev/icons")
    let imgsrc: string = ""
    onMount(() => {
        if (skills) {
            const params = new URLSearchParams({
                i: skills.join(","),
                theme: "dark"
            })
            imgsrc = `${baseUrl}?${params.toString()}`
        }
    })

</script>
{#if imgsrc}
    <img src={imgsrc} alt="Skills include {skills.join(', ')}"/>
{/if}