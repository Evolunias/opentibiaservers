import WithTrainersTibiantisServerKeywordPage, { generateMetadata } from './with-trainers-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibiantisServerKeywordPage />;
}
