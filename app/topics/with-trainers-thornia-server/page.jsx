import WithTrainersThorniaServerKeywordPage, { generateMetadata } from './with-trainers-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersThorniaServerKeywordPage />;
}
