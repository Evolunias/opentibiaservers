import WithTrainersTibiaraServerKeywordPage, { generateMetadata } from './with-trainers-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibiaraServerKeywordPage />;
}
