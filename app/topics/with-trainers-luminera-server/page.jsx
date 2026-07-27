import WithTrainersLumineraServerKeywordPage, { generateMetadata } from './with-trainers-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersLumineraServerKeywordPage />;
}
