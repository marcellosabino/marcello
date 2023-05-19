import ArticlePreview from '@/components/ArticlePreview';
import Tag from '@/components/Tag';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'next/link';
import WorkExperience, {
  CompanyExperience,
} from '../components/WorkExperience';
import { getArticles } from './articles/page';

export default async function Home() {
  const articles = await getArticles();

  const companies: CompanyExperience[] = [
    {
      id: 3,
      name: 'The Hartford',
      jobTitle: 'Sr. Software Engineer',
      imageFileName: 'the-hartford.svg',
      startYear: '2020',
      endYear: 'Present',
    },
    {
      id: 2,
      name: 'Travelers',
      jobTitle: 'Sr. Software Engineer',
      imageFileName: 'travelers.svg',
      startYear: '2017',
      endYear: '2020',
    },
    {
      id: 1,
      name: 'University of Hartford',
      jobTitle: 'Computer Science Tutor',
      imageFileName: 'uhart.png',
      startYear: '2015',
      endYear: '2018',
    },
  ];

  const skills: string[] = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'Java',
    'SQL',
    'Git',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Bootstrap',
    'Cypress',
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3 w-full md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl md:leading-[3rem] font-extrabold">
          Software Engineer, Runner, and Practical Stoic
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          I&apos;m Marcello, a software engineer, runner, and practical stoic
          based in Hartford, Connecticut. I am the proud founder of Marcello
          Codes LLC; where we create unique solutions to enhance human
          experience in everyday life.
        </p>
        <ul
          id="Homepage_Social_Links"
          className="flex gap-7 text-2xl text-gray-500 dark:text-gray-400"
        >
          <li>
            <Link
              className="hover:text-gray-600 dark:hover:text-gray-300"
              href="https://www.linkedin.com/in/marcello-sabino/"
            >
              <i className="bi bi-linkedin" aria-label="linkedin profile" />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-600 dark:hover:text-gray-300"
              href="https://twitter.com/marcellocodes"
            >
              <i className="bi bi-twitter" aria-label="twitter profile" />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-600 dark:hover:text-gray-300"
              href="https://github.com/marcellosabino"
            >
              <i className="bi bi-github" aria-label="github profile" />
            </Link>
          </li>
        </ul>
      </section>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="flex flex-col gap-5 w-full md:w-3/5">
          {articles.slice(0, 5).map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </div>
        <aside className="flex flex-col gap-5 w-full md:w-2/5">
          <div className="card">
            <div className="flex gap-2 items-center">
              <i className="bi bi-briefcase text-gray-500 dark:text-gray-400 text-xl" />
              <h1 className="font-semibold">
                <span>Work Experience</span>
              </h1>
            </div>
            {companies.map((company) => (
              <WorkExperience key={company.id} company={company} />
            ))}
            <a
              className="flex gap-3 justify-center bg-blue-600 text-white rounded-lg py-1.5 font-medium mt-3 hover:bg-blue-500"
              href="/marcello-resume.pdf"
              download="Marcello Sabino - Resume"
            >
              Download Resume
              <i className="bi bi-download text-blue-100" />
            </a>
          </div>
          <div className="card">
            <div className="flex gap-2 items-center">
              <i className="bi bi-rocket-takeoff text-gray-500 dark:text-gray-400 text-xl" />
              <h1 className="font-semibold">
                <span>Proficencies</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill: string) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
