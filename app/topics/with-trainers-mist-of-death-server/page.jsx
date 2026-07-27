import WithTrainersMistOfDeathServerKeywordPage, { generateMetadata } from './with-trainers-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersMistOfDeathServerKeywordPage />;
}
