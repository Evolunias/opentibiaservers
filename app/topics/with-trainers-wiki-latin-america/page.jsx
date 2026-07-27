import WithTrainersWikiLatinAmericaKeywordPage, { generateMetadata } from './with-trainers-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiLatinAmericaKeywordPage />;
}
