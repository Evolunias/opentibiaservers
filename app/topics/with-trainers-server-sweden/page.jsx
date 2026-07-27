import WithTrainersServerSwedenKeywordPage, { generateMetadata } from './with-trainers-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerSwedenKeywordPage />;
}
