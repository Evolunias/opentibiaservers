import WithTrainersAlasteraServerKeywordPage, { generateMetadata } from './with-trainers-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersAlasteraServerKeywordPage />;
}
