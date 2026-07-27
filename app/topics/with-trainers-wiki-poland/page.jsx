import WithTrainersWikiPolandKeywordPage, { generateMetadata } from './with-trainers-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiPolandKeywordPage />;
}
