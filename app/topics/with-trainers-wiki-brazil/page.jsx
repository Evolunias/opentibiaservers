import WithTrainersWikiBrazilKeywordPage, { generateMetadata } from './with-trainers-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersWikiBrazilKeywordPage />;
}
