export type TermMemberItem = {
    key: string
    name: string
    role: string
    coAdvisor: string
    experience: string
    certificate: string
    website?: string
}

export type TermData = {
    term: number
    officers: TermMemberItem[]
    coreMembers: TermMemberItem[]
}
