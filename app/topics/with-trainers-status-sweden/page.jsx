import WithTrainersStatusSwedenKeywordPage, { generateMetadata } from './with-trainers-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusSwedenKeywordPage />;
}
