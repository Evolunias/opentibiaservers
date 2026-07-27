import WithTrainersServerListPolandKeywordPage, { generateMetadata } from './with-trainers-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListPolandKeywordPage />;
}
