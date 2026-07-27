import Yurots13WithTrainersServerKeywordPage, { generateMetadata } from './yurots-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13WithTrainersServerKeywordPage />;
}
