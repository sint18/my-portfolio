<script lang="ts">
    interface contactInfo {
        icon: string
        text: string
    }

    const contactInfoList: contactInfo[] = [
        {icon: "(LinkedIn)", text: "LinkedIn"},
        {icon: "(GitHub)", text: "GitHub"},
        {icon: "(Email)", text: "Email"},
    ]
</script>
<footer>
    <div class="container mx-auto p-10 space-y-5">
        <a href="/about" class="text-xl text-center">About</a>
        <ul class="flex justify-between space-x-10">
            {#each contactInfoList as contactInfo }
                <li>
                    <span>{contactInfo.icon}</span>
                    <span class="flex-auto">{contactInfo.text}</span>
                </li>
            {/each}
        </ul>
        <p class="font-semibold text-end">Coded with ❤️ by Sint.</p>
    </div>
</footer>