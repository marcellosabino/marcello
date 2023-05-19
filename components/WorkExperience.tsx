import Image from 'next/image';

export type CompanyExperience = {
  id: number;
  imageFileName: string;
  name: string;
  jobTitle: string;
  startYear: string;
  endYear: string;
};

export default function WorkExperience({
  company,
}: {
  company: CompanyExperience;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="shrink-0 rounded-full p-3 bg-white border border-gray-200 dark:border-gray-800">
        <Image
          className="w-6 h-6"
          src={`/images/companies/${company.imageFileName}`}
          alt={company.name}
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-sm font-bold">{company.name}</h1>
        <div className="flex flex-row md:flex-col lg:flex-row justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="shrink-0">{company.jobTitle}</span>
          <span>
            {company.startYear}
            &mdash;
            {company.endYear}
          </span>
        </div>
      </div>
    </div>
  );
}
