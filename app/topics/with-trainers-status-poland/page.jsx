import WithTrainersStatusPolandKeywordPage, { generateMetadata } from './with-trainers-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusPolandKeywordPage />;
}
