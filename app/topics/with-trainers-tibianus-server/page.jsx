import WithTrainersTibianusServerKeywordPage, { generateMetadata } from './with-trainers-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibianusServerKeywordPage />;
}
