import getFileNamesFrom from '@/app/utils';
import { readFile } from 'fs/promises';
import { glob } from 'glob';
import { marked } from 'marked';

export async function generateStaticParams() {
  return getFileNamesFrom('articles');
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const file = await glob(`articles/**/${id}.md`, { withFileTypes: true });
  const contents = await readFile(file[0].fullpath(), { encoding: 'utf-8' });

  return (
    <div
      className="full-article"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: marked.parse(contents, { mangle: false }),
      }}
    />
  );
}
