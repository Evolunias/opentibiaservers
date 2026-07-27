import WithTrainersStatusUsaKeywordPage, { generateMetadata } from './with-trainers-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusUsaKeywordPage />;
}
