import WithTrainersCarlinotServerKeywordPage, { generateMetadata } from './with-trainers-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersCarlinotServerKeywordPage />;
}
