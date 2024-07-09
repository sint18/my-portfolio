import { json } from '@sveltejs/kit'
import type { Project } from '$lib/types'

async function getProjects(featured: boolean = false) {
    let projects: Project[] = []

    const paths = import.meta.glob('/src/projects/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Project, 'slug'>
            const post = { ...metadata, slug } satisfies Project

            if (featured) {
                post.featured && projects.push(post)
            } else {
                projects.push(post)
            }
        }
    }

    projects = projects.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return projects
}

export async function GET({ url }) {
    const featured: boolean = Boolean(url.searchParams.get('featured'))
    const projects = await getProjects(featured)
    return json(projects)
}
