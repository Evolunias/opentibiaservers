import WithTrainersRealeraServerKeywordPage, { generateMetadata } from './with-trainers-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersRealeraServerKeywordPage />;
}
