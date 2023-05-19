import Image from 'next/image';
import Link from 'next/link';
import getFileNamesFrom from '../utils';

export default async function Home() {
  const projects = (await getFileNamesFrom('projects')).map(
    (project) => project.id,
  );

  function displayProjects() {
    return (
      <>
        {projects.map((project) => (
          <Link href={`portfolio/${project}`}>
            <Image
              className="w-full h-full rounded-lg border-4 border-gray-200 dark:border-gray-700 dark:hover:border-gray-600 duration-300 ease-in-out"
              src={`/images/portfolio/${project}.png`}
              alt={project}
              width={512}
              height={512}
            />
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3 w-full md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl md:leading-[3rem] font-extrabold">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          So, you&apos;re interested in some of my previous projects. Here are
          some of the ones that I am allowed to share.
        </p>
      </section>
      <div className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayProjects()}
        </div>
      </div>
    </div>
  );
}
