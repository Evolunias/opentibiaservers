import WithTrainersElderaServerKeywordPage, { generateMetadata } from './with-trainers-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersElderaServerKeywordPage />;
}
