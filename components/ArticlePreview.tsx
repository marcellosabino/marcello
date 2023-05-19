import { Article } from '@/models/Article';
import Link from 'next/link';

export default function ArticlePreview({ article }: { article: Article }) {
  /**
   * Beautifies a given date string and returns the format
   * of MMM DD, YYYY. For example, December 10, 2023.
   *
   * @param date a date string to convert to a formatted date
   * @returns A date in the form of MMM DD, YYYY
   */
  function toBeautifulDate(date: string): string {
    const formattedDate = new Date(date);
    formattedDate.setDate(formattedDate.getDate() + 1);
    return formattedDate.toLocaleDateString('en-us', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
  }

  return (
    <Link
      className="md:rounded-lg -mx-6 md:mr-0 px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-900"
      href={`articles/${article.id}`}
    >
      <article className="dark:text-gray-300">
        <time
          className="text-xs border-l-4 border-gray-200 dark:border-gray-600 pl-2 text-gray-600 dark:text-gray-400"
          dateTime={article.createdAt}
        >
          {toBeautifulDate(article.createdAt)}
        </time>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{article.title}</h1>
          <p>{article.preview}</p>
          <span className="font-semibold text-link dark:text-link-dark">
            Read the full article &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
