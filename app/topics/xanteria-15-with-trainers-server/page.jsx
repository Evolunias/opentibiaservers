import Xanteria15WithTrainersServerKeywordPage, { generateMetadata } from './xanteria-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15WithTrainersServerKeywordPage />;
}
