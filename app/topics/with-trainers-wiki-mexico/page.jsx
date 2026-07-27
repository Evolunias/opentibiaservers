import WithTrainersWikiMexicoKeywordPage, { generateMetadata } from './with-trainers-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiMexicoKeywordPage />;
}
