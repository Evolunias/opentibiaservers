import WithTrainersClientUkKeywordPage, { generateMetadata } from './with-trainers-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientUkKeywordPage />;
}
