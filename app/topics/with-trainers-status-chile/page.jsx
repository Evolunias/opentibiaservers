import WithTrainersStatusChileKeywordPage, { generateMetadata } from './with-trainers-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusChileKeywordPage />;
}
