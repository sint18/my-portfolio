export type Project = {
    title: string
    repo: string
    description: string
    tags: string[]
    coverImageUrl: string
}

type Contact = {
    email: string
    phone: string
}

export type AboutMe = {
    aboutText: string
    skills: string[]
    contact: Contact
}

export type Header = {
    title: string
    personalProfile: string
    introduction: string
}

export type Links = {
    linkedin: string
    github: string
}

