import {client} from "$lib/sanity";
import type {Project} from "$lib/types";

async function getProjects() {
    const CONTENT_QUERY = `*[_type == "project"] {
  title,
  description,
  repo,
  site,
  "coverImageUrl": coverImage.asset -> url,
  tags[]
}
`
    return await client.fetch(CONTENT_QUERY)
}

export async function load() {
    const projects: Project[] = await getProjects()
    return {projects}
}
