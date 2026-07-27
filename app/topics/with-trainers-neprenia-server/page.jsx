import WithTrainersNepreniaServerKeywordPage, { generateMetadata } from './with-trainers-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersNepreniaServerKeywordPage />;
}
