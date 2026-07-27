import WithTrainersMediviaServerKeywordPage, { generateMetadata } from './with-trainers-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersMediviaServerKeywordPage />;
}
