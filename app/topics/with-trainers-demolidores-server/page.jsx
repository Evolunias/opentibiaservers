import WithTrainersDemolidoresServerKeywordPage, { generateMetadata } from './with-trainers-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersDemolidoresServerKeywordPage />;
}
