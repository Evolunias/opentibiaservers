import WithTrainersWikiArgentinaKeywordPage, { generateMetadata } from './with-trainers-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiArgentinaKeywordPage />;
}
