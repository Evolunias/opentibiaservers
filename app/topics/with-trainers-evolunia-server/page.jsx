import WithTrainersEvoluniaServerKeywordPage, { generateMetadata } from './with-trainers-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersEvoluniaServerKeywordPage />;
}
