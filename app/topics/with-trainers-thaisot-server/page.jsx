import WithTrainersThaisotServerKeywordPage, { generateMetadata } from './with-trainers-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersThaisotServerKeywordPage />;
}
