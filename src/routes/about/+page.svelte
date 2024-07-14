<script lang="ts">
    import EmailIcon from 'virtual:icons/mdi/alternate-email'
    import PhoneIcon from 'virtual:icons/mdi/phone'
    import {fly} from "svelte/transition";
    import {onMount} from "svelte";

    export let data
    let ready = false
    onMount(() => ready = true)

</script>
<main>
    <div class="container p-10 sm:px-20 sm:py-10 mx-auto space-y-20 sm:space-y-28 h-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {#if data.about.aboutText}
                {#if ready}
                    <h1 class="h1 text-3xl sm:text-5xl" transition:fly={{delay: 100, duration: 500, x: -50 }}>About</h1>
                    <div class="col-span-2">
                        <p class="text-xl font-semibold leading-loose"
                           transition:fly={{delay: 100, duration: 500, x: 50 }}>
                            {data.about.aboutText}
                        </p>
                    </div>
                {/if}
            {/if}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {#if data.about.skills}
                {#if ready}
                    <h2 class="h2 text-2xl sm:text-4xl" transition:fly={{delay: 200, duration: 500, x: -50 }}>
                        Skills</h2>
                    <ul class="col-span-2 leading-loose text-xl font-semibold list-disc px-4"
                        transition:fly={{delay: 200, duration: 500, x: 50 }}>
                        {#each data.about.skills as skill}
                            <li transition:fly={{delay: 100, duration: 500, x: -50 }}>{skill}</li>
                        {/each}
                    </ul>
                {/if}
            {/if}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {#if ready}
                <h2 class="h2 text-2xl sm:text-4xl" transition:fly={{delay: 300, duration: 500, x: -50 }}>Contact</h2>
                <ul class="list leading-loose text-xl font-semibold" transition:fly={{delay: 300, duration: 500, x: 50 }}>
                    <li>
                        <span><EmailIcon></EmailIcon></span>
                        <span class="flex-auto">{data.about.contact.email}</span>
                    </li>
                    <li>
                        <span><PhoneIcon></PhoneIcon></span>
                        <span class="flex-auto">{data.about.contact.phone}</span>
                    </li>
                </ul>
            {/if}
        </div>
    </div>
</main>