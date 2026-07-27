import WithTrainersWikiGermanyKeywordPage, { generateMetadata } from './with-trainers-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiGermanyKeywordPage />;
}
