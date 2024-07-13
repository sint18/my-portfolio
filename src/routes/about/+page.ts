import {client} from "$lib/sanity";
import type {AboutMe} from "$lib/types";

async function getAboutData() {
    const CONTENT_QUERY = `*[_type == "about"][0] {
  aboutText,
    skills,
    contact
}
`
    return await client.fetch(CONTENT_QUERY)
}
export async function load() {
    const about: AboutMe = await getAboutData()
    return { about }
}