import WithTrainersNostaltherServerKeywordPage, { generateMetadata } from './with-trainers-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersNostaltherServerKeywordPage />;
}
