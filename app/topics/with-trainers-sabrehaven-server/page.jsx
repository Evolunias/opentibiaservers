import WithTrainersSabrehavenServerKeywordPage, { generateMetadata } from './with-trainers-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSabrehavenServerKeywordPage />;
}
