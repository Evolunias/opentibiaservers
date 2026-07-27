import WithTrainersWikiUkKeywordPage, { generateMetadata } from './with-trainers-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiUkKeywordPage />;
}
