import WithTrainersClientCanadaKeywordPage, { generateMetadata } from './with-trainers-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientCanadaKeywordPage />;
}
