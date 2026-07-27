import WithTrainersWikiUsaKeywordPage, { generateMetadata } from './with-trainers-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiUsaKeywordPage />;
}
