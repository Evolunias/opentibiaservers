import WithTrainersServerListUsaKeywordPage, { generateMetadata } from './with-trainers-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListUsaKeywordPage />;
}
