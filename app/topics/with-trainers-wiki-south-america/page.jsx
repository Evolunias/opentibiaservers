import WithTrainersWikiSouthAmericaKeywordPage, { generateMetadata } from './with-trainers-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiSouthAmericaKeywordPage />;
}
