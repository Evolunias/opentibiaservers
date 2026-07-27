import WithTrainersClientGermanyKeywordPage, { generateMetadata } from './with-trainers-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientGermanyKeywordPage />;
}
