import WithTrainersServerListMexicoKeywordPage, { generateMetadata } from './with-trainers-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListMexicoKeywordPage />;
}
