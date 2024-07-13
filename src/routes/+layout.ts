import {client} from "$lib/sanity";
import type {Links} from "$lib/types";

async function getLinks() {
    const CONTENT_QUERY = `*[_type == "links"][0] {
  github,
  linkedin
}
`
    return await client.fetch(CONTENT_QUERY)
}

export async function load() {
    const links: Links = await getLinks()
    return { links }
}