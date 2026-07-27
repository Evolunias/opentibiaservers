import WithTrainersCanobServerKeywordPage, { generateMetadata } from './with-trainers-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersCanobServerKeywordPage />;
}
