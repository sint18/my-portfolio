import {client} from "$lib/sanity";

async function getProjects() {
    const CONTENT_QUERY = `*[_type == "project"] {
  title,
  description,
  slug,
  "coverImageUrl": coverImage.asset -> url,
  tags[]
}
`
    return await client.fetch(CONTENT_QUERY)
}

export async function load() {
    const projects = await getProjects()
    return {projects}
}