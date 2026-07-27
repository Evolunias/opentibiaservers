import WithTrainersSerenityServerKeywordPage, { generateMetadata } from './with-trainers-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSerenityServerKeywordPage />;
}
