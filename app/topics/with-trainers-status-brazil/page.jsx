import WithTrainersStatusBrazilKeywordPage, { generateMetadata } from './with-trainers-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusBrazilKeywordPage />;
}
