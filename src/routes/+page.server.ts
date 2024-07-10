import type { Project } from '$lib/types'

export async function load({ fetch }) {
    const response = await fetch('api/projects?featured=true')
    const projects: Project[] = await response.json()
    return { projects }
}
