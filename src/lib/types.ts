export type Project = {
    title: string
    slug: string
    description: string
    date: string
    techStack: string[]
    featured: boolean
    imageUrl: string
}

type Contact = {
    github: string
    linkedin: string
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
}

