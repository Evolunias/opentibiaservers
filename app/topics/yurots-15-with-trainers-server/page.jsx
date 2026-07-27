import Yurots15WithTrainersServerKeywordPage, { generateMetadata } from './yurots-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15WithTrainersServerKeywordPage />;
}
