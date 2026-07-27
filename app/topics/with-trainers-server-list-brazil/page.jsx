import WithTrainersServerListBrazilKeywordPage, { generateMetadata } from './with-trainers-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListBrazilKeywordPage />;
}
