import WithTrainersKasteriaServerKeywordPage, { generateMetadata } from './with-trainers-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersKasteriaServerKeywordPage />;
}
