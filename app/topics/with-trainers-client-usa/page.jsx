import WithTrainersClientUsaKeywordPage, { generateMetadata } from './with-trainers-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientUsaKeywordPage />;
}
