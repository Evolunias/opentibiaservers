import WithTrainersWikiChileKeywordPage, { generateMetadata } from './with-trainers-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiChileKeywordPage />;
}
