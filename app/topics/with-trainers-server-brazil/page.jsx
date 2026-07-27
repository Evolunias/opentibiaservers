import WithTrainersServerBrazilKeywordPage, { generateMetadata } from './with-trainers-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerBrazilKeywordPage />;
}
