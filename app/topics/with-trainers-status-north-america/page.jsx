import WithTrainersStatusNorthAmericaKeywordPage, { generateMetadata } from './with-trainers-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusNorthAmericaKeywordPage />;
}
