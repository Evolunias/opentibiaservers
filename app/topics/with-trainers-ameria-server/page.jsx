import WithTrainersAmeriaServerKeywordPage, { generateMetadata } from './with-trainers-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersAmeriaServerKeywordPage />;
}
