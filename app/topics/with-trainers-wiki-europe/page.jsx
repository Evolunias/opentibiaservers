import WithTrainersWikiEuropeKeywordPage, { generateMetadata } from './with-trainers-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiEuropeKeywordPage />;
}
