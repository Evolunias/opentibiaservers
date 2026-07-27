import Yurots14WithTrainersServerKeywordPage, { generateMetadata } from './yurots-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14WithTrainersServerKeywordPage />;
}
