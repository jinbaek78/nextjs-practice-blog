import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  id: string;
  createAt: string;
  title: string;
  subTitle: string;
  description: string;
  category: string;
  images: string;
  nextId?: string;
  previousId?: string;
  featured: boolean;
};

export async function getPostDataAll(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getPostData(id: string): Promise<Post> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await JSON.parse(await fs.readFile(filePath, 'utf-8'));
  const found = data.find((post: Post) => post.id === id);
  return found;
}

export async function getPost(id: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'posts', `post${id}.md`);
  const data = await fs.readFile(filePath, 'utf-8');
  return data;
}
