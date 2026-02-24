export interface BlogSection {
    title?: string;
    content: string;
}

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
    sections: BlogSection[];
}
