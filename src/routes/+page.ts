import {client} from "$lib/sanity";

async function getProjects() {
    const CONTENT_QUERY = `*[_type == "project"] {
  ...,
  coverImage {
    ...,
    asset->
  },
  tags[],
  body
}
`
    return await client.fetch(CONTENT_QUERY)
}

export async function load() {
    const projects = await getProjects()
    return { projects }
}
