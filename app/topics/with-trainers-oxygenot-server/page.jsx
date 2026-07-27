import WithTrainersOxygenotServerKeywordPage, { generateMetadata } from './with-trainers-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersOxygenotServerKeywordPage />;
}
