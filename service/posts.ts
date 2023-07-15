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
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

// get Post
