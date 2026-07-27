import WithTrainersNoxiousotServerKeywordPage, { generateMetadata } from './with-trainers-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersNoxiousotServerKeywordPage />;
}
