<script lang="ts">
    import {onMount} from "svelte";
    import {fade} from "svelte/transition"

    let showArrow = true

    function scrollDown() {
        const target = document.getElementById("project-showcase")
        if (!target) return
        target.scrollIntoView({
            behavior: "smooth"
        })
    }

    onMount(() => {
        window.onscroll = () => {
            showArrow = window.scrollY <= 800;
        }
    })

</script>

{#if showArrow}
    <button transition:fade={{ delay: 200, duration: 200 }} type="button" class="arrow" on:click={scrollDown}>
        <span class="border-[5px] border-transparent border-b-primary-800 border-r-primary-800 dark:border-b-primary-100 dark:border-r-primary-100"></span>
    </button>
{/if}
<style>
    .arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        cursor: pointer;
    }

    .arrow span {
        display: block;
        width: 2rem;
        height: 2rem;
        transform: rotate(45deg);
        margin: -10px;
    }

</style>