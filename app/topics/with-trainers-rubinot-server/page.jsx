import WithTrainersRubinotServerKeywordPage, { generateMetadata } from './with-trainers-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersRubinotServerKeywordPage />;
}
