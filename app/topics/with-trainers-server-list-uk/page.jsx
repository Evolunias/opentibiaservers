import WithTrainersServerListUkKeywordPage, { generateMetadata } from './with-trainers-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListUkKeywordPage />;
}
