export type Categories = 'sveltekit' | 'svelte'

export type Project = {
    title: string
    slug: string
    description: string
    date: string
    techStack: Categories[]
    featured: boolean
}

