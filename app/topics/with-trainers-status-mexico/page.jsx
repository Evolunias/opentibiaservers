import WithTrainersStatusMexicoKeywordPage, { generateMetadata } from './with-trainers-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersStatusMexicoKeywordPage />;
}
