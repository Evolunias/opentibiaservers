import Yurots12WithTrainersServerKeywordPage, { generateMetadata } from './yurots-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12WithTrainersServerKeywordPage />;
}
