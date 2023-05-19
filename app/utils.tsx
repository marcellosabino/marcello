import { glob } from 'glob';

export default async function getFileNamesFrom(
  folder: string,
  fileExtension = 'md',
): Promise<{ id: string }[]> {
  const files = await glob(`${folder}/**/*.${fileExtension}`, {
    withFileTypes: true,
  });
  return files.map((file) => ({ id: file.name.split('.')[0] }));
}
