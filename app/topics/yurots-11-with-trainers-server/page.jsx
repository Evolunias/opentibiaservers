import Yurots11WithTrainersServerKeywordPage, { generateMetadata } from './yurots-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11WithTrainersServerKeywordPage />;
}
