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
        <span class="border-[5px] border-transparent border-b-primary-800 border-r-primary-800"></span>
        <!--    <span></span>-->
        <!--<span></span>-->
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
        /*border-bottom: 5px solid black;*/
        /*border-right: 5px solid black;*/
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;
    }

    .arrow span:nth-child(2) {
        animation-delay: -0.2s;
    }

    .arrow span:nth-child(3) {
        animation-delay: -0.4s;
    }

    @keyframes animate {
        0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px, -20px);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px, 20px);
        }
    }
</style>