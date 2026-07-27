import WithTrainersServerArgentinaKeywordPage, { generateMetadata } from './with-trainers-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerArgentinaKeywordPage />;
}
