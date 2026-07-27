import WithTrainersClientBrazilKeywordPage, { generateMetadata } from './with-trainers-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientBrazilKeywordPage />;
}
