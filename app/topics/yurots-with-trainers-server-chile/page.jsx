import YurotsWithTrainersServerChileKeywordPage, { generateMetadata } from './yurots-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithTrainersServerChileKeywordPage />;
}
