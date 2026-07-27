import WithTrainersTibiascapeServerKeywordPage, { generateMetadata } from './with-trainers-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibiascapeServerKeywordPage />;
}
