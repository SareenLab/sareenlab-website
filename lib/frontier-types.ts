export type PostType = "op-ed" | "field-notes" | "field-dispatch" | "worth-reading";

export interface FrontierPost {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  excerpt: string;
  readTime: string;
  featured: boolean;
  content: string;
}

export const postTypeLabels: Record<PostType, string> = {
  "op-ed": "Op-Ed",
  "field-notes": "Field Notes",
  "field-dispatch": "Field Dispatch",
  "worth-reading": "Worth Reading",
};

export const postTypeColors: Record<PostType, string> = {
  "op-ed": "text-accent bg-accent/10 border-accent/20",
  "field-notes": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "field-dispatch": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "worth-reading": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};
