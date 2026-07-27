import Xanteria13WithTrainersServerKeywordPage, { generateMetadata } from './xanteria-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13WithTrainersServerKeywordPage />;
}
