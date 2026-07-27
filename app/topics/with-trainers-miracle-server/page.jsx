import WithTrainersMiracleServerKeywordPage, { generateMetadata } from './with-trainers-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersMiracleServerKeywordPage />;
}
