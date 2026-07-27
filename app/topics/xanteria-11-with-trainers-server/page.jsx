import Xanteria11WithTrainersServerKeywordPage, { generateMetadata } from './xanteria-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11WithTrainersServerKeywordPage />;
}
