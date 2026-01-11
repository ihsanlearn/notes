import matter from "gray-matter";

// TODO: Configure these in your .env.local file
const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USER || "iihsann"; 
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "mykisahgue-content";
const GITHUB_PATH = process.env.NEXT_PUBLIC_GITHUB_PATH || "content";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const HEADERS: HeadersInit = GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {};
const BASE_API = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`;

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(BASE_API, { 
      headers: HEADERS,
      next: { revalidate: 60 } // Revalidate every 60s
    });

    if (!response.ok) {
        console.warn(`[MDX] Failed to fetch content list: ${response.statusText}`);
        return [];
    }

    const files = await response.json();
    if (!Array.isArray(files)) return [];

    const posts = await Promise.all(
      files
        .filter((file: any) => file.name.endsWith(".md"))
        .map(async (file: any) => {
          const slug = file.name.replace(/\.md$/, "");
          // Fetch raw content
          const rawRes = await fetch(file.download_url, { headers: HEADERS });
          const fileContents = await rawRes.text();
          const { data, content } = matter(fileContents);

          return {
            slug,
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || "",
            coverImage: data.coverImage,
            tags: data.tags || [],
            content,
          };
        })
    );

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    console.error("[MDX] Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}
