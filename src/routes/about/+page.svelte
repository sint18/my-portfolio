<script lang="ts">
    import EmailIcon from 'virtual:icons/mdi/alternate-email'
    import PhoneIcon from 'virtual:icons/mdi/phone'
</script>
<main>
    <!-- TODO: Complete about page -->
    <div class="container p-10 mx-auto space-y-20 sm:space-y-28 h-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <h1 class="h1 text-3xl sm:text-5xl">About</h1>
            <div class="col-span-2">
                <p class="text-xl font-semibold leading-loose">
                    Hello! I'm Sint Lwin Htoo, a passionate software engineer based in London, UK. I hold a BSc in
                    Software Engineering (Hons) from the University of Portsmouth, where I graduated with a GPA of
                    3.45 and a grade of 2:1. My journey in computing started at Edinburgh Napier University with a
                    BSc in Computing with Distinction, and an HND in Software Development from Info Myanmar
                    University.
                </p>
            </div>
        </div>
        <div class="space-y-8">
            <h2 class="h2 text-2xl sm:text-4xl">Technologies</h2>
            <ul class="leading-loose text-xl font-semibold list-disc px-4 list-inside">
                <li>Python - Flask, FastAPI</li>
                <li>JavaScript - SvelteKit, Node.js</li>
                <li>PostgreSQL</li>
                <li>Rust</li>
            </ul>
        </div>
        <div class="space-y-8">
            <h2 class="h2 text-2xl sm:text-4xl">Contact</h2>
            <ul class="list leading-loose text-xl font-semibold list-disc px-4 list-inside">
                <li>
                    <span><EmailIcon></EmailIcon></span>
                    <span class="flex-auto">sintlwinhtoo.slh@gmail.com</span>
                </li>
                <li>
                    <span><PhoneIcon></PhoneIcon></span>
                    <span class="flex-auto">(+44)(0)7510508486</span>
                </li>
            </ul>
        </div>
    </div>
</main>