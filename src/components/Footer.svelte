<script lang="ts">
    import GitHubLogo from 'virtual:icons/mdi/github'
    import LinkedInLogo from 'virtual:icons/mdi/linkedin'
    import EmailIcon from 'virtual:icons/mdi/alternate-email'

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
        <div class="flex space-x-5 justify-between">
            <div class="flex space-x-5">
                <a href="https://github.com/sint18" target="_blank" rel="noopener noreferrer" class="hover:text-primary-700 text-2xl">
                    <GitHubLogo></GitHubLogo>
                </a>
                <a href="https://www.linkedin.com/in/sintlwinhtoo/" target="_blank" rel="noopener noreferrer" class="hover:text-primary-700 text-2xl">
                    <LinkedInLogo></LinkedInLogo>
                </a>
            </div>
            <p class="font-semibold">Coded with ❤️ by Sint.</p>
        </div>
    </div>
</footer>