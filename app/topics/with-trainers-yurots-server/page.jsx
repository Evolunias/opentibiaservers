import WithTrainersYurotsServerKeywordPage, { generateMetadata } from './with-trainers-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersYurotsServerKeywordPage />;
}
