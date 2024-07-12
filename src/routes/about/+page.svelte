<script lang="ts">
    import EmailIcon from 'virtual:icons/mdi/alternate-email'
    import PhoneIcon from 'virtual:icons/mdi/phone'

    export let data
</script>
<main>
    <!-- TODO: Complete about page -->
    <div class="container p-10 mx-auto space-y-20 sm:space-y-28 h-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {#if data.about.aboutText}
                <h1 class="h1 text-3xl sm:text-5xl">About</h1>
                <div class="col-span-2">
                    <p class="text-xl font-semibold leading-loose">
                        {data.about.aboutText}
                    </p>
                </div>
            {/if}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {#if data.about.skills}
                <h2 class="h2 text-2xl sm:text-4xl">Skills</h2>
                <ul class="col-span-2 leading-loose text-xl font-semibold list-disc px-4">
                    {#each data.about.skills as skill}
                        <li>{skill}</li>
                    {/each}
                </ul>
            {/if}
        </div>
        <div class="space-y-8">
            <h2 class="h2 text-2xl sm:text-4xl">Contact</h2>
            <ul class="list leading-loose text-xl font-semibold list-disc px-4 list-inside">
                <li>
                    <span><EmailIcon></EmailIcon></span>
                    <span class="flex-auto">{data.about.contact.email}</span>
                </li>
                <li>
                    <span><PhoneIcon></PhoneIcon></span>
                    <span class="flex-auto">{data.about.contact.phone}</span>
                </li>
            </ul>
        </div>
    </div>
</main>