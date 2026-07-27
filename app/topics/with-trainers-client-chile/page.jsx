import WithTrainersClientChileKeywordPage, { generateMetadata } from './with-trainers-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientChileKeywordPage />;
}
