import WithTrainersNtoStarServerKeywordPage, { generateMetadata } from './with-trainers-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersNtoStarServerKeywordPage />;
}
