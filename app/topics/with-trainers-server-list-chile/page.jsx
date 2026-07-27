import WithTrainersServerListChileKeywordPage, { generateMetadata } from './with-trainers-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListChileKeywordPage />;
}
