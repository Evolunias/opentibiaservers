import WithTrainersWikiSwedenKeywordPage, { generateMetadata } from './with-trainers-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiSwedenKeywordPage />;
}
