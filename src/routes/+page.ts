import {client} from "$lib/sanity";
import type {Header, Project} from "$lib/types";

/**
 * Requests projects data and header data from Sentry server
 */
async function getData() {
    const CONTENT_QUERY = `{
  "projects": *[_type == "project" && featured == true] {
  title,
  description,
  repo,
  "slug": slug.current,
  "coverImageUrl": coverImage.asset -> url,
  tags[]
},
  "header": *[_type == "siteSettings"][0] {
    title,
    personalProfile,
    introduction
  }
}
`
    return await client.fetch(CONTENT_QUERY)
}
export async function load() {
    const data = await getData()

    // Casting data into Typescript object
    const header: Header = data.header
    const projects: Project[] = data.projects
    return { header, projects }
}