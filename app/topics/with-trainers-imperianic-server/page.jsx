import WithTrainersImperianicServerKeywordPage, { generateMetadata } from './with-trainers-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersImperianicServerKeywordPage />;
}
