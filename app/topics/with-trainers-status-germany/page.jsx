import WithTrainersStatusGermanyKeywordPage, { generateMetadata } from './with-trainers-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusGermanyKeywordPage />;
}
