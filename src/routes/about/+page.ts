import {client} from "$lib/sanity";

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
    const about = await getAboutData()
    console.log(about)
    return { about }
}