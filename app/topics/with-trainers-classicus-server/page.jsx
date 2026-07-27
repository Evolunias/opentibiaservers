import WithTrainersClassicusServerKeywordPage, { generateMetadata } from './with-trainers-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClassicusServerKeywordPage />;
}
