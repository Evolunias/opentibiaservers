import WithTrainersTibijkaServerKeywordPage, { generateMetadata } from './with-trainers-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersTibijkaServerKeywordPage />;
}
