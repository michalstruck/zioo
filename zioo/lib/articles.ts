import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleSlug } from './article-slugs';
import { ROUTES } from './config';

const articlesDirectory = path.join(process.cwd(), 'content/artykuly');

export interface ArticleMetadata {
  title: string;
  preview: string;
  image: string;
  slug: string;
}

export function getSortedArticlesData(): ArticleMetadata[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        preview: matterResult.data.preview || '',
        image: matterResult.data.image || '',
        ...matterResult.data,
      };
    });

  return allArticlesData;
}

export function getArticleHref(slug: ArticleSlug): string {
  return `${ROUTES.ARTYKULY}/${slug}`;
}

