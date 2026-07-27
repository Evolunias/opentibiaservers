import WithTrainersStatusCanadaKeywordPage, { generateMetadata } from './with-trainers-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusCanadaKeywordPage />;
}
