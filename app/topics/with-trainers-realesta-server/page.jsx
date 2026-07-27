import WithTrainersRealestaServerKeywordPage, { generateMetadata } from './with-trainers-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersRealestaServerKeywordPage />;
}
