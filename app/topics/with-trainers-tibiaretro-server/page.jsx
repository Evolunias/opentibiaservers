import WithTrainersTibiaretroServerKeywordPage, { generateMetadata } from './with-trainers-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibiaretroServerKeywordPage />;
}
