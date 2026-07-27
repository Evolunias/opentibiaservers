import WithTrainersWikiNorthAmericaKeywordPage, { generateMetadata } from './with-trainers-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiNorthAmericaKeywordPage />;
}
