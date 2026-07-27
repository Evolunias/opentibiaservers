import WithTrainersServerListCanadaKeywordPage, { generateMetadata } from './with-trainers-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListCanadaKeywordPage />;
}
