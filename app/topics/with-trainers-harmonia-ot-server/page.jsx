import WithTrainersHarmoniaOtServerKeywordPage, { generateMetadata } from './with-trainers-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersHarmoniaOtServerKeywordPage />;
}
