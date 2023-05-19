import ArticlePreview from '@/components/ArticlePreview';
import { Article } from '@/models/Article';
import { readFile } from 'fs/promises';
import { glob } from 'glob';

async function convertMarkdownToArticle(path: any): Promise<Article> {
  const createdAt = path.name.slice(0, 10);
  const id = path.name.split('.')[0];
  const fileContents = await readFile(path.fullpath(), { encoding: 'utf-8' });
  const [title, ...descriptions] = fileContents.split('\n');
  const description = descriptions.filter(Boolean).join(' ').trim();

  return {
    id,
    createdAt,
    title: title.replaceAll('#', '').trim(),
    description: description.trim(),
    preview: `${description.slice(0, 200).trim()}...`,
  };
}

export async function getArticles(): Promise<Article[]> {
  const blogs = await glob('articles/**/*.md', { withFileTypes: true });
  return Promise.all(blogs.map((blog) => convertMarkdownToArticle(blog)));
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3 w-full md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl md:leading-[3rem] font-extrabold">
          Marching Through Life
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Some articles that I have written over the years. Mostly, these
          consist of life events, leadership, and my opinions.
        </p>
      </section>
      <div className="flex flex-col gap-5 w-full md:max-w-2xl">
        {articles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
