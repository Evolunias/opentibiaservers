import WithTrainersOtmadnessServerKeywordPage, { generateMetadata } from './with-trainers-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersOtmadnessServerKeywordPage />;
}
