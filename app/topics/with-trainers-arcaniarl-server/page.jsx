import WithTrainersArcaniarlServerKeywordPage, { generateMetadata } from './with-trainers-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersArcaniarlServerKeywordPage />;
}
