import WithTrainersSeasonChileKeywordPage, { generateMetadata } from './with-trainers-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonChileKeywordPage />;
}
