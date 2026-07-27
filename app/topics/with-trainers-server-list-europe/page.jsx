import WithTrainersServerListEuropeKeywordPage, { generateMetadata } from './with-trainers-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListEuropeKeywordPage />;
}
