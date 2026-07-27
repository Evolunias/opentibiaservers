import WithTrainersClientEuropeKeywordPage, { generateMetadata } from './with-trainers-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientEuropeKeywordPage />;
}
