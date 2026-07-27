import WithTrainersWikiCanadaKeywordPage, { generateMetadata } from './with-trainers-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiCanadaKeywordPage />;
}
